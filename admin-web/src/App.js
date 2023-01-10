import "./App.css";
import { Header } from "./components/header.js";
import { Body } from "./components/body.js";

function App() {
    return (
        <div className="App">
            <div className="NAV">
                <Header />
            </div>
            <div className="Bodd">
                <Body />
            </div>
        </div>
    );
}

export default App;
