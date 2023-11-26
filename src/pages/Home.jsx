
import Presentation from "../components/Presentation";
import Services from "../components/Services";
import Detail from "../components/Detail";
import {useRef, useState} from "react";

export default function Home() {
    //state
    const [etat, setEtat] = useState("")

    //comportements
    console.log(etat)

    return (
        <div className="home">
            <Presentation />
            <Services setEtat={setEtat}/>
            <Detail etat={etat} setEtat={setEtat}/>
        </div>
    );
};