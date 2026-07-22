import { describe, expect, it, vi } from 'vitest';

const { createBrowserRouterMock } = vi.hoisted(() => ({
  createBrowserRouterMock: vi.fn((routes) => ({ routes })),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    createBrowserRouter: createBrowserRouterMock,
  };
});

import router from './router';

describe('router configuration', () => {
  it('provides renderable elements for the home and add-job routes', () => {
    const rootRoute = router.routes.find((route) => route.path === '/');

    expect(rootRoute).toBeDefined();
    expect(rootRoute.element).toBeDefined();

    const homeRoute = rootRoute.children?.find((route) => route.index === true);
    const addJobRoute = rootRoute.children?.find(
      (route) => route.path === 'jobs/add'
    );

    expect(homeRoute?.element).toBeDefined();
    expect(addJobRoute?.element).toBeDefined();
  });
});
