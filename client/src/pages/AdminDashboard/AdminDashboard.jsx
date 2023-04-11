import React from 'react'
import "./style.css"
import logo from "../../assets/logo.png"
import bell from "../../assets/bell.svg";
import pfp from "../../assets/Pfp.svg";

const AdminDashboard = () => {
  return (
    <div id="adminWrapper">
        <div id="adminHeader">
            <img src={logo} alt="logo" id="logoAdmin" />
            <div id="adminIcons">
                <img src={bell} alt="bell"  id="bell"/>
                <img src={pfp} alt="pfp"  id="adminPFP"/>
            </div>
        </div>
        <div id="lowerAdmin">
            <div id="sidebarAdmin">
                <div id="adminNavigation">
                    <ul>
                        <li><a>Dashboard</a></li>
                        <li><a>Add/Update Company</a></li>
                        <li><a>Credential Manager</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            <div id="adminRight">
                <div id="listOfCompanies">
                    <h3>Upcoming Companies</h3>
                    <div id="companyNamesList">
                        <h2>Company Name</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard