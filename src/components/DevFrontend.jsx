import Checklist from "./Checklist";

export default function DevFrontend() {
    //state

    //comportement

    return (
        <div className="DevFrontend">
            <h2 className="text-capitalize">
                Développement Web
            </h2>
            <div className="row justify-content-between">
                <div className="col-lg-5 col-12">
                    <Checklist title="Front-end" descriptions="html | css | javascript - React"/>
                    <Checklist title="Responsive" descriptions="Bootstrap"/>
                </div>
            </div>
        </div>
    )
};