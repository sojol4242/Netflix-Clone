 
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './App';
 

const PrivateRoute = ({ children, ...rest }) => {
  const [signedInUser,setSignedInUser]=useContext(UserContext);
//   const email = signedInUser.user.email;  
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
        signedInUser.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;
 