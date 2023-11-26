import {Element} from "react-scroll"
import Prev from "./Prev";
import GraphicDesign from "./GraphicDesign";
import DevFrontend from "./DevFrontend";

export default function Detail({etat}) {
    //state

    //comportement
    const designGraphique = <>
        <GraphicDesign />
    </>
    const devFrontend = <>
        <DevFrontend />
    </>

    return (
        <Element name="detail">
            <div className="Detail">
                <div style={{position:"relative", zIndex: 2}}>
                    <div className="d-flex justify-content-center w-100">
                        <div className="d-flex justify-content-center align-items-center py-3" style={{position: "relative", bottom: "auto"}}>
                            <div style={{background: "white", height: 1, width: 120}}/>
                            <Prev to="services" smooth={"easeInOutCubic"} duration={1000}/>
                            <div style={{background: "white", height: 1, width: 120}}/>
                        </div>
                    </div>
                </div>
                <div>
                    {etat==="one" ? designGraphique : etat==="two" ? devFrontend : ""}
                </div>
            </div>
        </Element>
    )
};