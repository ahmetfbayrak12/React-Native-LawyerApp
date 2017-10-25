import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  USERNAME_SURNAME_CHANGED
} from './Types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const usernameSurnameChanged = (text) => {
  return {
    type: USERNAME_SURNAME_CHANGED ,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const registerUser =  ({ userName_Surname,email, password }) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_USER });
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const result = await registerUserSuccess(dispatch, user)

    const { currentUser } = firebase.auth();
     
    firebase.database().ref(`/users/${currentUser.uid}`)
      .push({ userName_Surname, email, password })
      .then(() => {
        dispatch({ type: REGISTER_USER_SUCCESS });
      });
  };
};


const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
  Actions.login();
};