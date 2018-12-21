import profileBuilderReducer from './profileBuilder';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  profile: profileBuilderReducer
});

export default rootReducer;