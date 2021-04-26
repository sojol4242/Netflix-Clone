import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../App";
import "./profile.css";
import Nav from "../Nav";

const Profilescreen = () => {
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  return (
    <div className="profile">
      <Nav />
      <div className="profile-section">
        <h2>Edit Profile</h2>
        <hr />
        <div className="profile-info">
          <Avatar
            className="avatar"
            alt="Code"
            src={signedInUser.photoURL}
          />
          <div className="profile-details">
            <h2>User : {signedInUser.email} </h2>
            <div className="profile-plans">
              <h3>Plans</h3>
              <p>Renewal Date : </p>
              <div className="package">
                <div className="pricing">
                  <h4>Netflix basic</h4>
                  <p>480p</p>
                </div>
            
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="package">
                <div className="pricing">
                  <h4>Netflix Standard</h4>
                  <p>1080p</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="package">
                <div className="pricing">
                  <h4>Netflix Premium</h4>
                  <p>4k+HDR</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <button className="sign-out">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilescreen;
