import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/apclogo.png'


const SideBar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon ">
                    {/* <i className="fas fa-laugh-wink"></i> */}
                    <img src={logo} alt="logo" height={40} />
                </div>
                <div className="sidebar-brand-text mx-3"> Admin </div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <Link className="nav-link" to="/states">
                    <i className="fas fa-fw fa-map-marker"></i>
                    <span>States</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/positions">
                <i className="fas fa-fw fa-user"></i>
                    <span>Positions</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/candidates">
                    <i className="fas fa-fw fa-user"></i>
                    <span>Candidates</span></Link>
            </li>

            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to="/donations">
                    <i className="fas fa-fw fa-dollar-sign"></i>
                    <span>Donations</span></Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <Link className="btn btn-success btn-sm" to="#">Log out</Link>
            </div>

        </ul>
    )
}

export default SideBar
