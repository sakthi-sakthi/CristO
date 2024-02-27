import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalForm from './ModalForm';
import 'bootstrap/dist/js/bootstrap.bundle';


const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <Link to={"/"}>
                            <img src="assets/img/cristo/logo.png" alt="" />
                        </Link>
                    </h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li className="dropdown">
                                <Link to={"/"}>
                                    <span>Home</span> <i className="bi bi-chevron-down" />
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link to={"/"}>
                                    <span>Products</span> <i className="bi bi-chevron-down" />
                                </Link>
                                <ul id="startul">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <li>
                                                <a href="https://cristoerp.com/" target='_blank' rel='noreferrer'>
                                                    <img src='assets/img/cristo/parishimg.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                                    CristO  <br />
                                                    <small style={{ marginLeft: "52px" }}>Parish Management Software</small>
                                                </a>
                                            </li>
                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <a href="https://religio.cristoerp.com/" target='_blank' rel='noreferrer'>
                                                    <img src='assets/img/cristo/religioimg.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                                    ReligiO  <br /> <small style={{ marginLeft: "52px" }}>Province Management Software</small>
                                                </a>
                                            </li>
                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <a href="/">
                                                    <img src='assets/img/cristo/12.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                                    Cathedra  <br /> <small style={{ marginLeft: "52px" }}>Diocese Management Software</small>
                                                </a>
                                            </li>
                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <a href="/">
                                                    <img src='assets/img/cristo/charishma.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                                    Charisma  <br /><small style={{ marginLeft: "52px" }}> Denominational Church Software</small>
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to={"/team"}>
                                    <span>Team</span> <i className="bi bi-chevron-down" />
                                </Link>
                            </li>
                            <li className="dropdown">
                                <a href="/">
                                    <span>Learn</span> <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <Link to={"/aboutus"}>
                                            <img src='assets/img/cristo/about.jpg' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            About Us  <br />
                                            <small style={{ marginLeft: "52px" }}>Our Story and Our Values</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="/" data-toggle="modal" data-target="#exampleModalCenter">
                                            <img src='assets/img/cristo/call.svg' alt='demo' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Book a Demo Call <br />  <small style={{ marginLeft: "52px" }}>Schedule time with ChMS expert </small><br /><small style={{ marginLeft: "52px" }}> who can tour CristO ChMs with you live</small>
                                        </a>
                                    </li>
                                    <li>
                                        <Link to={"/supportcenter"}>
                                            <img src='assets/img/cristo/support.svg' alt='support' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Support Center <br /> <small style={{ marginLeft: "52px" }}>Helpful Response in ~ 1 Hour</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/datatransfer"}>
                                            <img src='assets/img/cristo/transfer.svg' alt='data transfer' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Data Transfer <br /> <small style={{ marginLeft: "52px" }}>Data Transfer with No Hassle</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/mobileapp"}>
                                            <img src='assets/img/cristo/mobile.png' alt='mobileapp' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Mobile App <br /><small style={{ marginLeft: "52px" }}> Software that simplifies your church</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/security"}>
                                            <img src='assets/img/cristo/security.png' alt='security' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Security <br /><small style={{ marginLeft: "52px" }}> How we keep your data safe</small>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="/">
                                    <span>Try it Out</span> <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <Link to={"/contactus"}>
                                            <img src='assets/img/cristo/phone.svg' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Contact Us <br />
                                            <small style={{ marginLeft: "52px" }}>Reach out, we're here for you!</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="/" data-toggle="modal" data-target="#exampleModalCenter">
                                            <img src='assets/img/cristo/call.svg' alt='about' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                            Book a Live Demo Call  <br />
                                            <small style={{ marginLeft: "52px" }}>Schedule time with ChMS expert </small><br /><small style={{ marginLeft: "52px" }}> who can tour CristO ChMs with you live</small>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    className="getstarted"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileMenu} />
                    </nav>
                </div >
            </header >
            <div className={`offcanvas offcanvas-start ${showMobileMenu ? 'show' : ''}`} tabIndex="-1" id="offcanvasMobileMenu" aria-labelledby="offcanvasMobileMenuLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasMobileMenuLabel">CristO</h5>
                    <button type="button" className="btn-close text-reset" onClick={toggleMobileMenu}></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li className="dropdown">
                            <Link to={"/"}>
                                <span>Home</span> <i className="bi bi-chevron-down" />
                            </Link>
                        </li>

                        <li className="dropdown">
                            <span onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown">Products</span> <i className="bi bi-chevron-down" />
                            <ul className="dropdown-menu">
                                <div className="row">
                                    <div className="col-md-6">
                                        <li>
                                            <a href="https://cristoerp.com/" target='_blank' rel='noreferrer'>
                                                <img src='assets/img/cristo/parishimg.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                                <b>CristO </b> <br />
                                                Parish Management Software
                                            </a>
                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li>
                                            <a href="https://religio.cristoerp.com/" target='_blank' rel='noreferrer'>
                                                <img src='assets/img/cristo/religioimg.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                                <b>ReligiO </b> <br /> Province Management Software
                                            </a>
                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li>
                                            <a href="/">
                                                <img src='assets/img/cristo/12.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                                <b>Cathedra </b> <br /> Diocese Management Software
                                            </a>
                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li>
                                            <a href="/">
                                                <img src='assets/img/cristo/charishma.png' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                                <b>Charisma </b> <br /> Denominational Church Software
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to={"/team"}>
                                <span>Team</span> <i className="bi bi-chevron-down" />
                            </Link>
                        </li>

                        <li className="dropdown">
                            <span onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown">Learn</span> <i className="bi bi-chevron-down" />
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={"/aboutus"}>
                                        <img src='assets/img/cristo/about.jpg' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>About Us </b> <br />
                                        Our Story and Our Values
                                    </Link>
                                </li>
                                <li>
                                    <a href="/" data-toggle="modal" data-target="#exampleModalCenter">
                                        <img src='assets/img/cristo/call.svg' alt='demo' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>Book a Demo Call</b> <br /> Schedule time with ChMS expert <br /> who can tour CristO ChMs with you live
                                    </a>
                                </li>
                                <li>
                                    <Link to={"/supportcenter"}>
                                        <img src='assets/img/cristo/support.svg' alt='support' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>Support Center</b> <br /> Helpful Response in ~ 1 Hour
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/datatransfer"}>
                                        <img src='assets/img/cristo/transfer.svg' alt='data transfer' style={{ maxWidth: "42px", marginRight: "10px", marginBottom: "-20px" }} />
                                        Data Transfer <br /> <small style={{ marginLeft: "52px" }}>Data Transfer with No Hassle</small>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/mobileapp"}>
                                        <img src='assets/img/cristo/mobile.png' alt='mobileapp' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>Mobile App</b> <br /> Software that simplifies your church
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/security"}>
                                        <img src='assets/img/cristo/security.png' alt='security' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>Security</b> <br /> How we keep your data safe
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <span onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown">Try it Out</span> <i className="bi bi-chevron-down" />
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={"/contactus"}>
                                        <img src='assets/img/cristo/phone.svg' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>Contact Us</b> <br />
                                        Reach out, we're here for you!
                                    </Link>
                                </li>
                                <li>
                                    <a href="/" data-toggle="modal" data-target="#exampleModalCenter">
                                        <img src='assets/img/cristo/call.svg' alt='about' style={{ maxWidth: "42px", marginRight: "10px" }} />
                                        <b>Book a Live Demo Call </b> <br />
                                        Schedule time with a CristO expert who
                                        <br />
                                        can tour CristO with you live
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <button
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                className="btn btn-primary getstarted">
                                Get Started
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {
                showMobileMenu &&
                <div className="offcanvas-backdrop" onClick={toggleMobileMenu}></div>
            }

            <ModalForm />

        </>
    )
}

export default Header
