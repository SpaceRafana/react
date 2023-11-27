import "./styles.css";
import "./bootstrap/bootstrap.min.css"
import "./bootstrap/icomoon/style.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import {useState} from "react";

export default function App() {
    //state

    //comportements

    //affichage
    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar/>
                    <Routes>
                        <Route index Component={Home}/>
                        <Route path="/portfolio" Component={Portfolio}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
