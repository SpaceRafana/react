import {Outlet, NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../img/space-rafana-logo-1080.svg";
import {ReactComponent as Icon} from "../img/mail_black_24dp.svg";
import {useState} from "react";

export default function Navbar() {
    //state

    //comportement

    //affichage
    return (
        <div className="navigation">
            <nav className="navlink">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <Logo style={{width: 63, height: 63}} alt="logo space rafana"/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <ul>
                            <li>
                                <NavLink to="/" className={
                                    (nav) => (nav.isActive?"nav-active":"") + " navLi colorWhite"}>
                                    Accueil
                                    <div style={{background: "white", width: "0%", height: 2}}/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={
                                    (nav) => (nav.isActive?"nav-active":"") + " navLi colorWhite"}>
                                    Services
                                    <div style={{background: "white", width: "0", height: 2}}/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className={
                                    (nav) => (nav.isActive?"nav-active":"") + " navLi colorWhite"}>
                                    Portfolio
                                    <div style={{background: "white", width: "0", height: 2}}/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-end">
                        <div className="d-flex justify-content-end w-75">
                            <a href={"mailto: fanekena.f12@gmail.com"} className="buttonNav d-flex align-items-center">
                                <Icon style={{fill: "white"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}