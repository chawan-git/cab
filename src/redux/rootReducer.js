import { combineReducers } from "redux";
import adminReducer from "./admin/adminReducer";
import cabReducer from "./cab/cabReducer";
import driverReducer from "./driver/driverReducer";
import loginReducer from "./login/loginReducer";
import signupReducer from "./signup/signupReducer";
import tripReducer from "./trip/tripReducer";
import customerReducer from "./customer/customerReducer";

// Author: Ashutosh Rao Chawan U
// This is the rootReducer which uses the combineReducers method to combine all the reducers, so that it can be passed as a parameter to the redux store.
const rootReducer = combineReducers({
  cabReducer,
  adminReducer,
  driverReducer,
  loginReducer,
  signupReducer,
  tripReducer,
  customerReducer,
});

export default rootReducer;
