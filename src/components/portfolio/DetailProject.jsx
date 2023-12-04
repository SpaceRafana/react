
export default function DetailProject({detail, setDetail, titre, sousTitre, textContent1, textContent2, image1, image2}) {
    //state

    //comportement

    return (
        <div className={(detail ? "fadeIn" : "") + " detailProject"}>
            <div className="d-flex align-items-center gap-5">
                <h1>{titre}</h1>
                <div className="MyBtn" onClick={() => setDetail("portfolio")}>
                    <span className="icon-arrow-left2 align-self-center d-flex"/>
                </div>
            </div>
            <div className="row gap-5">
                <div className="col-lg-4">
                    <h2 className="colorGreen">{sousTitre}</h2>
                    <p>{textContent1}</p>
                    <div className="" style={{
                        backgroundImage: `url(${image2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: !image2 ? "1px dashed white" : "",
                        borderRadius: 8,
                        height: 350,
                        boxShadow: "0 5px 5px rgb(35,35,35)"
                    }}/>
                </div>
                <div className="col-lg-6">
                    <div style={{
                        backgroundImage: `url(${image1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 8,
                        height: 350,
                        marginBottom: 21,
                        boxShadow: "0 5px 5px rgb(35,35,35)"
                    }}>
                    </div>
                    <h3>Mise en situation réel</h3>
                    <p>
                        {textContent2}
                    </p>
                </div>
            </div>

        </div>
    )
}