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
                <h2>Ce que je fait ?</h2>
                <p className="offset-lg-3 col-lg-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                    exerci.
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="box1 col-lg-6" style={{cursor: "pointer"}} >
                    <Link to="detail" smooth={"easeInOutCubic"} duration={1000} onClick={handleOne}>
                        <div className={"boxing1"}>
                            {/*<div className="caption"/>*/}
                            <div className="title">
                                <div className="text-start">
                                    <p className="fw-bold mb-0">Graphic design</p>
                                    <div style={{background: "var(--color)", width: 65, height: 15, marginTop: 5}}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="box2 col-lg-6" style={{cursor: "pointer"}} >
                    <Link to="detail" smooth={"easeInOutCubic"} duration={1000} onClick={handleTwo}>
                        <div className={"boxing2"}>
                            <div className="caption"/>
                            <div className="title">
                                <div className="text-start lineHeight">
                                    <p className="fw-bold mb-0">Dev front-end</p>
                                    <div style={{background: "var(--color)", width: 65, height: 15, marginTop: 5}}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}