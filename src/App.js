import { Route, Switch } from "react-router";
import "./App.css";
import AdminHomeComponent from "./components/AdminHomeComponent";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Unauthorized from "./components/Unauthorized";
import DriverHomeComponent from "./components/DriverHomeComponent";
import SignInComponent from "./components/SignInComponent";
import SignUpComponent from "./components/SingUpComponent";
import LogoutComponent from "./components/LogoutComponent";


function App() {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/admin" component={AdminHomeComponent} />
          <Route path="/driver" component={DriverHomeComponent} />
          <Route path="/unauthorized" component={Unauthorized} />
          <Route path="/login" component={SignInComponent} />
          <Route path="/signUp" component={SignUpComponent } />
        <Route path="/logout" component={LogoutComponent} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
