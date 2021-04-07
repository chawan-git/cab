import { combineReducers } from "redux";
import adminReducer from "./admin/adminReducer";
import cabReducer from "./cab/cabReducer";
import driverReducer from "./driver/driverReducer";
import loginReducer from "./login/loginReducer";
import signupReducer from "./signup/signupReducer";
import tripReducer from "./trip/tripReducer";

const rootReducer = combineReducers({
  cabReducer,
  adminReducer,
  driverReducer,
  loginReducer,
  signupReducer,
  tripReducer,
});

export default rootReducer;
