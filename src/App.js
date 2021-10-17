import './App.css';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Items from './pages/Home/Items/Items';
import LogIn from './pages/LogIn/LogIn';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route exact path ='/login'>
            <LogIn></LogIn>
          </Route>
          <Route exact path ='/items'>
            <Items></Items>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
