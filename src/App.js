import { Route, Switch } from 'react-router';
import './App.css';
import AdminHomeComponent from './components/AdminHomeComponent';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/Admin" component={AdminHomeComponent}/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
