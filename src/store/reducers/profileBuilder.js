import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  showModal: false
};

const toggleModalState = (state, action) => {
  return updateObject(state, {showModal: !state.showModal})
};

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.TOGGLE_MODAL_STATE: return toggleModalState(state, action);
    default: return state;
  }
};

export default reducer;