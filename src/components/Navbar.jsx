import {ReactComponent as Logo} from "../img/space-rafana-logo-1080.svg";
import {ReactComponent as Icon} from "../img/mail_black_24dp.svg";

export default function Navbar() {
    //state

    //comportement

    //affichage
    return (
        <div className="navigation">
            <nav className="navlink">
                <div className="row d-flex align-items-center">
                    <div className="col-4 d-flex align-items-center">
                        <div className="">
                            <a href={"mailto: fanekena.f12@gmail.com"} className="buttonNav d-flex align-items-center">
                                <Icon style={{fill: "white"}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <Logo style={{width: 63, height: 63}} alt="logo space rafana"/>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <span className="icon-bars fs-4"/><span className="ms-2 fs-5">Menu</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}