import { apiClient } from '@/api/apiClient';

const rootRoute = '/jobs';

export const jobService = {
  getJobs() {
    return apiClient.get(rootRoute);
  },
  addJob(job, company) {
    return apiClient.post(rootRoute, { job, company });
  },
};
