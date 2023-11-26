import Checklist from "./Checklist";

export default function GraphicDesign() {
    //state

    //comportement

    return (
        <div className="GraphicDesign">
            <h2 className="fw-bold text-capitalize" style={{fontFamily: "Chakra Petch, sans-serif"}}>Graphic design</h2>
            <div className="d-flex justify-content-between">
                <div className="col-lg-5">
                    <Checklist
                        title="Design UI"
                        descriptions="Illustrator | Photoshop | XD"/>
                    <Checklist
                        title="Infographie"
                        descriptions="Illustrator | Photoshop"/>
                    <Checklist
                        title="Etiquettage/Packaging"
                        descriptions="Illustrator | Photoshop"/>
                </div>
            </div>
        </div>
    )
};