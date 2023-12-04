
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Services from "../components/Services";
import {useState} from "react";

export default function Home() {
    //state
    const [etat, setEtat] = useState("")

    //comportements

    return (
        <div className="home">
            <Navbar/>
            <Presentation />
            <Services etat={etat} setEtat={setEtat}/>
        </div>
    );
};