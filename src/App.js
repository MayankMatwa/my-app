import "./App.css";
import * as React from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Body from "./components/Body/Body.js";

function App() {
    const [mode, setMode] = React.useState("darkMode");

    return (
        <div className="App">
            <Header mode={mode} />
            <Body mode={mode} />
            <Footer mode={mode} setMode={setMode} />
        </div>
    );
}

export default App;
