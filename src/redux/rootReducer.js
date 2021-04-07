import { combineReducers } from "redux";
import adminReducer from "./admin/adminReducer";
import cabReducer from "./cab/cabReducer";
import driverReducer from "./driver/driverReducer";
import loginReducer from "./login/loginReducer";
import signupReducer from "./signup/signupReducer";
import tripReducer from "./trip/tripReducer";
import customerReducer from "./customer/customerReducer";

const rootReducer = combineReducers({
  cabReducer,
  adminReducer,
  driverReducer,
  loginReducer,
  signupReducer,
  tripReducer,
  customerReducer
});

export default rootReducer;
