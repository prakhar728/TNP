import React from "react";
import "./style.css";
import logo from "../../assets/logo.png"
import NotificationBell from "../../assets/NotificationBell.svg"
import Pfp from "../../assets/Pfp.svg"
import campusphoto from "../../assets/campusPhoto1.svg"
const Landing = () => {
  return (
    <div id="landingPageWrapper">
      <div className="navBar">
        <img src={logo} alt="logo" id="collegLogo"/>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div id="pfpAndNotif">
          <img src={NotificationBell} alt="notifications" />
          <img src={Pfp} alt="profile picture" />
        </div>
      </div>

      <div id="landingMain">
        <div id="leftHalfLanding">
          <h1>Open The Gates To Your Success</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla quos veritatis ipsum architecto ratione omnis, enim, quo repellendus neque tenetur sunt libero officia eaque mollitia repellat. Fuga, minus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla quos veritatis ipsum architecto ratione omnis, enim, quo repellendus neque tenetur sunt libero officia eaque mollitia repellat. Fuga, minus placeat!</p>
          <button>View Dashboard</button>

          <div id="stats">
            <div>
              <span className="statsNumber">86%</span>  Placement Percentage
            </div>
            <div>
            <span className="statsNumber"> 50+</span>   Companies Visited
            </div>
            <div>
            <span className="statsNumber">   30LPA</span>  Highest Package
            </div>
          </div>
        </div>
        <div id="rightHalfLanding">
          <img src={campusphoto} alt="Campus View" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
