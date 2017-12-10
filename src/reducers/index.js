import { combineReducers } from 'redux';

import CategoryReducer from './reducer-category';

const rootReducer = combineReducers({
  category: CategoryReducer
});

export default rootReducer;
