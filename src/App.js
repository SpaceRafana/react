import "./styles.css";
import "./bootstrap/bootstrap.min.css"
import "./bootstrap/icomoon/style.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./pages/Home";

export default function App() {
    //state

    //comportements

    //affichage
    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route index Component={Home}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
