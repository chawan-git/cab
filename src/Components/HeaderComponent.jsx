import React, { Component } from 'react'
import logo from '../logo.png';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

export class HeaderComponent extends Component {
    render() {
        return (
            <>
            <header className="header">
            <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand align-text-center pt-2" href="https://cab.rao.life/">
            <img src={logo} alt="logo" style={{height: 70, width: 70}} className="d-inline-block align-text-center me-2 ms-1"/>
            <span className="text-white h2 fw-bolder align-middle">Kaali</span><span className="mt-2 h2  fw-bolder align-middle" style={{color: "#ffeb3b"}}>Peeli</span>
            </a>
            
            <ul className="nav nav-pills justify-content-end">

            <li className="nav-item">
            
            <a className="nav-link fw-bold text-white fs-5" href="https://cab.rao.life/"> <PersonOutlineRoundedIcon style={{color: "white"}}/> Sign In</a>
            </li>
            <li className="nav-item">
            <a className="nav-link me-2 fw-bold text-dark rounded-pill fs-5" href="https://cab.rao.life/" style={{background: "#ffeb3b"}}>Sign Up</a>
            </li>

            </ul>


            </nav>
            </header>
            </>
            )
        }
    }
    
    export default HeaderComponent
    