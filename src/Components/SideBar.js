import React from 'react';
import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3"> Admin </div>
            </Link>

            <hr class="sidebar-divider my-0" />

            <li class="nav-item active">
                <Link class="nav-link" to="/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
                <Link class="nav-link" to="/states">
                    <i class="fas fa-fw fa-map-marker"></i>
                    <span>States</span></Link>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to="/lga">
                <i class="fas fa-fw fa-map-marker"></i>
                    <span>LGA</span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/positions">
                <i class="fas fa-fw fa-user"></i>
                    <span>Positions</span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/candidates">
                    <i class="fas fa-fw fa-user"></i>
                    <span>Candidates</span></Link>
            </li>

            <hr class="sidebar-divider" />
            <li class="nav-item">
                <Link class="nav-link" to="/donations">
                    <i class="fas fa-fw fa-dollar-sign"></i>
                    <span>Donations</span></Link>
            </li>
            <hr class="sidebar-divider d-none d-md-block" />

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div class="sidebar-card d-none d-lg-flex">
                <Link class="btn btn-success btn-sm" to="#">Log out</Link>
            </div>

        </ul>
    )
}

export default SideBar
