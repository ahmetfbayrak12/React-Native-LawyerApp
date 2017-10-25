import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import FindJobReducers from './FindJobReducers';
import EmployeeReducer from './EmployeeReducer';
import JobReducer from './JobReducer';
import JobFormReducer from './JobFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: FindJobReducers,
  employees: EmployeeReducer,
  jobRed: JobReducer,
  jobFormRed: JobFormReducer,
});
