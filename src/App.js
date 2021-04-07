import { Route, Switch } from "react-router";
import "./App.css";
import AdminHomeComponent from "./components/AdminHomeComponent";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Unauthorized from "./components/Unauthorized";
import DriverHomeComponent from "./components/DriverHomeComponent";
import SignInComponent from "./components/SignInComponent";
import LogoutComponent from "./components/LogoutComponent";
import SignInHandleComponent from "./components/SignInHandleComponent";
import CustomerAddComponent from "./components/CustomerAddComponent";
import ResetPasswordComponent from "./components/ResetPasswordComponent";
import ResetPasswordComponent1 from "./components/ResetPasswordComponent1";
import NotFound from "./components/NotFound";
import TripHomeComponent from "./components/TripHomeComponent";
import ResetPasswordSuccess from "./components/ResetPasswordSuccess";

function App() {
  return (
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
          <Route path="/resetPasswordSuccess" component={ResetPasswordSuccess} />
          <Route
            path="/resetPassword1/:username"
            component={ResetPasswordComponent1}
          />
          <Route path="/customer" component={TripHomeComponent} />
          <Route path="/unauthorized" component={Unauthorized} />

          <Route path="/notfound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
