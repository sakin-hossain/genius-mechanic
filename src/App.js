import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/booking/:serviceId">
              <Booking/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
