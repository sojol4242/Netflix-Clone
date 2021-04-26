import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import Profilescreen from "./pages/Profilescreen";
 
export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});

  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <div className="app">
        <Router>
          <Switch>
          <PrivateRoute exact path="/">
              <HomeScreen />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/home">
              <HomeScreen />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profilescreen/>
            </PrivateRoute>
            
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
