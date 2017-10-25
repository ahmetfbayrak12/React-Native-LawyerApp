import {
  EMPLOYEE_UPDATE,
} from '../Actions/Types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift1: '',
  shift2: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    
    default:
      return state;
  }
};