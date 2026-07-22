import { ApiError } from './apiError';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api';

class ApiClient {
  get(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }

  async request(endpoint, options = {}) {
    const request = this.beforeRequest(endpoint, options);

    const response = await fetch(request.url, request.options);

    await this.afterResponse(response);

    if (!response.ok) {
      await this.handleError(response);
    }

    if (response.status === 204) {
      return null;
    }

    return response.json();
  }

  beforeRequest(endpoint, options) {
    const token = localStorage.getItem('accessToken');
    const headers = new Headers(options.headers);

    if (!headers.has('Content-Type') && options.body) {
      headers.set('Content-Type', 'application/json');
    }

    if (!options.skipAuth && token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    const normalizedBaseUrl = API_BASE_URL.endsWith('/')
      ? API_BASE_URL.slice(0, -1)
      : API_BASE_URL;
    const safeEndpoint =
      typeof endpoint === 'string' && endpoint.trim() ? endpoint : '/';
    const normalizedEndpoint = safeEndpoint.startsWith('/')
      ? safeEndpoint
      : `/${safeEndpoint}`;

    return {
      url: `${normalizedBaseUrl}/api${normalizedEndpoint}`,
      options: {
        ...options,
        headers,
      },
    };
  }

  async afterResponse(response) {
    if (response.status === 401) {
      localStorage.removeItem('accessToken');
      // later: redirect or refresh token
    }
  }

  async handleError(response) {
    let details = null;

    try {
      details = await response.json();
    } catch {
      details = await response.text().catch(() => null);
    }

    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
      details
    );
  }
}

export const apiClient = new ApiClient();
