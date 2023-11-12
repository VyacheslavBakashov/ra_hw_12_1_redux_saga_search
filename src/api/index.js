import axios from 'axios';

export { skillsAPI } from './skills';

export const baseHost = axios.create({ baseURL: 'http://localhost:7070/api' });