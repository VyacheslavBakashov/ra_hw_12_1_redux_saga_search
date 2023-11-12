import { baseHost } from './index';

export const skillsAPI = {
  async getSkillsBySearch(payload) {
    const res = await baseHost.get('/search', { params: { q: payload } });
    return res;
  },
};