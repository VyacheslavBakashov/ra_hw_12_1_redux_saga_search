import { createReducer } from 'redux-act';

import {
  setEmptyFalse,
  setEmptyTrue,
  setLoadingFalse,
  setLoadingTrue,
  setSearchFalse,
  setSearchTrue,
  setSkills,
} from '../actions';

const initialState = {
  skills: [],
  loading: false,
  empty: false,
  search: false,
};

export const skillsReducer = createReducer({}, initialState)
  .on(setSkills, (state, payload) => {
    return { ...state, skills: payload };
  })
  .on(setLoadingTrue, (state) => {
    return { ...state, loading: true };
  })
  .on(setLoadingFalse, (state) => {
    return { ...state, loading: false };
  })
  .on(setEmptyTrue, (state) => {
    return { ...state, empty: true };
  })
  .on(setEmptyFalse, (state) => {
    return { ...state, empty: false };
  })
  .on(setSearchTrue, (state) => {
    return { ...state, search: true };
  })
  .on(setSearchFalse, (state) => {
    return { ...state, search: false };
  });