import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Dashboard
                    </NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/students">
                                    Students
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
}
