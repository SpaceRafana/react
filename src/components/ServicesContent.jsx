import Btn from "./Btn";
import {Link} from "react-scroll";

export default function ServicesContent({setEtat}) {

    //comportement
    const handleOne = () => {
        setEtat("one")
    }

    const handleTwo = () => {
        setEtat("two")
    }

    return (
        <>
            <div className="mb-4">
                <h2 className="fw-bold" style={{fontFamily: "Chakra Petch, sans-serif"}}>Ce que je fait ?</h2>
                <p className="lineHeight offset-3 col-lg-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                    exerci.
                </p>
            </div>
            <div className="d-flex col-lg-12 justify-content-center" style={{gap: 18}}>
                <Link to="detail" smooth={"easeInOutCubic"} duration={1000}>
                    <div className="box1" style={{cursor: "pointer"}} onClick={handleOne}>
                        <div className={"boxing1"}>
                            {/*<div className="caption"/>*/}
                            <div className="title">
                                <div className="text-start lineHeight">
                                    <p className="fw-bold mb-0">Graphic design</p>
                                    <div style={{background: "var(--color)", width: 65, height: 15, marginTop: 5}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="detail" smooth={"easeInOutCubic"} duration={1000}>
                    <div className="box2" style={{cursor: "pointer"}} onClick={handleTwo}>
                        <div className={"boxing2"}>
                            <div className="caption"/>
                            <div className="title">
                                <div className="text-start lineHeight">
                                    <p className="fw-bold mb-0">Dev front-end</p>
                                    <div style={{background: "var(--color)", width: 65, height: 15, marginTop: 5}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}