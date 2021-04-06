import './App.css'
import HomeScreen from './pages/HomeScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './pages/Login';
 
 
function App() {
   
    return ( 
    
      <div className="app"> 
      <Router>
        <Switch>
          <Route exact path="/">
              <HomeScreen/>    
            </Route> 
           <Route path="/home">
              <HomeScreen/>    
            </Route>         
          
           <Route path="/login">
              <Login/>   
            </Route> 
          
         </Switch>    
      </Router>   
          
      </div>
      
    );
}

export default App;