import { combineReducers } from "redux";
import adminReducer from "./admin/adminReducer";
import cabReducer from "./cab/cabReducer";
import driverReducer from "./driver/driverReducer";

const rootReducer = combineReducers({
  
  cabReducer, adminReducer, driverReducer
});

export default rootReducer;
