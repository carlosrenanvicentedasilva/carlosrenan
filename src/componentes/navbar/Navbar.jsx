import React, { useState } from 'react';
import "./NavbarStyles.css";
import logo from "../../img/logo-marca.png";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const changeBg = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBg);

    return (
        <nav className={
            navbar
                ? "navbar scroll navbar-expand-lg fixed-top shadow"
                : "navbar navbar-travada navbar-expand-lg border-bottom"
        }>
            <div className="container">
                <Link className="navbar-brand fw-bolder" to="/">
                    <img className="d-inline-block" src={logo} alt="logo-marca" width="200" height="60" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Pagina inicial</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/donato">A Donato</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/servicos">Servicos</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Produtos">Produtos</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contatos">Contatos</Link>
                        </li>

                        <hr width="0" size="50"></hr>
                    </ul>
                </div>
            </div>
        </nav>
    )
}