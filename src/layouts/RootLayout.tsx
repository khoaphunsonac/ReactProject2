import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RootLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        MyApp
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}
                                    to="/"
                                    end
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}
                                    to="/students"
                                >
                                    Students
                                </NavLink>
                            </li>
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) =>
                                                "nav-link" + (isActive ? " active fw-bold" : "")
                                            }
                                            to="/profile"
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-sm btn-outline-light ms-2" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container my-4 flex-grow-1">
                <Outlet />
            </main>

            {/* Footer (optional) */}
            <footer className="bg-light text-center py-3 mt-auto border-top">
                <small>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</small>
            </footer>
        </div>
    );
}
