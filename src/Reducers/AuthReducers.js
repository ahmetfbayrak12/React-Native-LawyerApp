import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  USERNAME_SURNAME_CHANGED

} from '../Actions/Types';

const INITIAL_STATE = {
  email: 'ahmetbayrak@gmail.com',  //ahmetbayrak12@gmail.com
  password: '123456', //123456
  userName_Surname:'',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
      case USERNAME_SURNAME_CHANGED:
      return { ...state, userName_Surname: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
      case REGISTER_USER:
      return {...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };      
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
