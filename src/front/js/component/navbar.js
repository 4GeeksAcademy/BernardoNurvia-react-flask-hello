import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("jwt-token");
            setIsAuthenticated(!!token);
        };
        
        // Verifica el token al cargar el componente
        checkAuth();

        // Escucha cambios en el localStorage
        window.addEventListener("storage", checkAuth);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, [localStorage]);

    const handleLogout = () => {
        localStorage.removeItem("jwt-token");
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Home</span>
                </Link>
                <div className="ml-auto d-grid gap-2 d-md-flex justify-content-md-end">
                    {isAuthenticated ? (
                        <>
                          
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-success">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn btn-primary">Signup</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};
