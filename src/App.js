import {useState} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function App() {

    const [theme, setTheme] = useState("default");
    const themeSource = document.getElementById("style-theme");

    if (theme === "default") {
        themeSource.setAttribute("href", "./css/index.css");
    }

    if (theme === "dark") {
        themeSource.setAttribute("href", "./css/theme-dark.css");
    }
    if (theme === "light") {
        themeSource.setAttribute("href", "./css/theme-light.css");
    }

    return <div className="app">
        <Navbar theme={theme} setTheme={setTheme} />
        <Header/>
        <MainContent/>
        <Footer/>
    </div>;
}