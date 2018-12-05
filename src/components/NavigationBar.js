import React from 'react';
import {  NavLink } from 'react-router-dom';

const NavigationBar = () => (  
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <a className="navbar-brand" href="/home">
    <img id="logo" className="img-responsive" src="img/logo.png"/>
</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse  d-none d-lg-block" id="navbarNav">
        <ul id="navlist" className="navbar-nav pull-right animated">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#sectionOne">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#sectionFour">My Projects</a>
            </li>
        </ul>
    </div>
</nav>
)

export default NavigationBar;