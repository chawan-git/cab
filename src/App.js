import { Route, Switch } from "react-router";
import "./App.css";
import AdminHomeComponent from "./Components/AdminHomeComponent";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Unauthorized from "./Components/Unauthorized";
import DriverHomeComponent from "./Components/DriverHomeComponent";
import SignInComponent from "./Components/SignInComponent";
import LogoutComponent from "./Components/LogoutComponent";
import SignInHandleComponent from "./Components/SignInHandleComponent";
import CustomerAddComponent from "./Components/CustomerAddComponent";
import ResetPasswordComponent from "./Components/ResetPasswordComponent";
import ResetPasswordComponent1 from "./Components/ResetPasswordComponent1";
import NotFound from "./Components/NotFound";
import TripHomeComponent from "./Components/TripHomeComponent";
import ResetPasswordSuccess from "./Components/ResetPasswordSuccess";
import TripRequestedComponent from "./Components/TripRequestedComponent";
import DriverTripComponent from "./Components/DriverTripComponent";

// Author: Ashutosh Rao Chawan U
// The root component of the application which includes the switch and route from the redux router.
function App() {
  return (
    //App.js
    <Provider store={store}>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/admin" component={AdminHomeComponent} />
          <Route path="/driver" component={DriverHomeComponent} />
          <Route path="/login" component={SignInComponent} />
          <Route path="/signUp" component={CustomerAddComponent} />
          <Route path="/logout" component={LogoutComponent} />
          <Route path="/signInHandle" component={SignInHandleComponent} />
          <Route path="/resetPassword" component={ResetPasswordComponent} />
          <Route
            path="/resetPasswordSuccess"
            component={ResetPasswordSuccess}
          />

          <Route
            path="/resetPassword1/:username"
            component={ResetPasswordComponent1}
          />
          <Route path="/customer" component={TripHomeComponent} />
          <Route path="/unauthorized" component={Unauthorized} />
          <Route
            path="/trip/:username/driver"
            component={DriverTripComponent}
          />
          <Route
            path="/trip/:username/customer"
            component={TripRequestedComponent}
          />
          <Route path="/notfound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
