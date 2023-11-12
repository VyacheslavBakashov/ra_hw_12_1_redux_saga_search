import { createAction } from 'redux-act';

export const getSkillsBySearch = createAction('GET_SKILLS_BY_SEARCH', (search) => search);
export const setSkills = createAction('SET_SKILLS', (skills) => skills);
export const setLoadingTrue = createAction('SET_LOADING_TRUE');
export const setLoadingFalse = createAction('SET_LOADING_FALSE');
export const setEmptyTrue = createAction('SET_EMPTY_TRUE');
export const setEmptyFalse = createAction('SET_EMPTY_FALSE');
export const setSearchTrue = createAction('SET_SEARCH_TRUE');
export const setSearchFalse = createAction('SET_SEARCH_FALSE');