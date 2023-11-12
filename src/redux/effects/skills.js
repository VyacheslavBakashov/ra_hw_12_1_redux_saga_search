import { call, debounce, put } from 'redux-saga/effects';
import { skillsAPI } from '../../api';

import { getSkillsBySearch, setEmptyFalse, setEmptyTrue, setLoadingFalse, setSkills } from '../actions';

function* getSkillsBySearchSaga({ payload }) {
  try {
    yield put(setEmptyFalse());

    const { data } = yield call(skillsAPI.getSkillsBySearch, payload);
    if (!data.length) {
      yield put(setEmptyTrue());
    }
    
    yield put(setSkills(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setLoadingFalse());
  }
}

export function* watchSkills() {
  yield debounce(100, getSkillsBySearch, getSkillsBySearchSaga);
}