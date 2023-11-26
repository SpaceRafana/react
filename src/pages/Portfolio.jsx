import WebDesign from "../img/presentation-web-design.png"
import Mac from "../img/macbook.png"

export default function Portfolio() {
    //state

    //comportement

    return (

        <div className="portfolio">
            <h1 className="textCenter colorGreen fw-bold">Portfolio</h1>
            <div className="row my-5 PFContent">
                <div className="col-lg-4 mb-4">
                    <div style={{
                        borderRadius: 18,
                        height: 308,
                        overflow: "hidden"
                    }}>
                        <img src={WebDesign} alt="#" width="135%"/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div style={{
                        borderRadius: 18,
                        height: 308,
                        overflow: "hidden"
                    }}>
                        <img src={Mac} alt="#" width="135%"/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div style={{
                        border: "1px dashed white",
                        borderRadius: 18,
                        height: 308}}/>
                </div>
                <div className="col-lg-4 mb-4">
                    <div style={{
                        border: "1px dashed white",
                        borderRadius: 18,
                        height: 308}}/>
                </div>
                <div className="col-lg-4 mb-4">
                    <div style={{
                        border: "1px dashed white",
                        borderRadius: 18,
                        height: 308}}/>
                </div>
                <div className="col-lg-4 mb-4">
                    <div style={{
                        border: "1px dashed white",
                        borderRadius: 18,
                        height: 308}}/>
                </div>
            </div>
        </div>
    )
}