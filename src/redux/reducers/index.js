import { combineReducers } from 'redux';

import { skillsReducer } from './skills';

export const rootReducer = combineReducers({
  skills: skillsReducer,
});