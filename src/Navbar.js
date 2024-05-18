export default function Navbar({theme, setTheme}) {

    return <div className="navbar-wide">
        <div className="navbar">
        <div className="navbar-brand">Logo</div>
        <div className="navbar-menu">
            <div className="navbar-menu-btn">
                Home
            </div>
            <div className="navbar-menu-btn">
                About
            </div>
            <div className="navbar-menu-btn">
                Portfolio
            </div>
            <div className="navbar-menu-btn">
                Contact
            </div>
            <div className="navbar-menu-btn">
                <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>
    </div>
    </div>;
}