import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Track from "../../Components/Track";


const MainFooter = () => {
    // eslint-disable-next-line
    const [showBanner, setShowBanner] = useState(
        !localStorage.getItem("CristO")
    );
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem("currentPage", location.pathname);
    }, [location]);

    const handleAccept = () => {
        localStorage.setItem("CristO", "true");
        setShowBanner(false);
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem("CristO");
            localStorage.removeItem("currentPage");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="CristO"
                style={{ background: "black" }}
                buttonStyle={{ color: "#fff", background: "rgb(1 139 210)", fontSize: "13px" }}
                onAccept={handleAccept}>
                This website uses cookies to enhance the user experience 🍪
            </CookieConsent>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <div className="copyright">
                                    <a href="https://cristoerp.com">
                                        <img
                                            src="https://cristoerp.com/wp-content/uploads/2023/07/logo-white.png"
                                            alt="cristo logo"
                                            style={{ height: 70, marginBottom: 10 }}
                                        />
                                    </a>
                                    <p>
                                        {" "}
                                        © 2024 CristO
                                        <br /> Powered by
                                        <a
                                            href="https://www.boscosofttech.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {" "}
                                            Boscosoft Technologies
                                        </a>
                                    </p>
                                    <div className="credits">
                                        <a
                                            href="https://facebook.com/boscosofttech"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 320 512"
                                                className="Facebook"
                                                id="fonticon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://in.linkedin.com/company/boscosoft-technologies"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 448 512"
                                                className="Linkedin"
                                                id="fonticon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/boscosoft/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 448 512"
                                                className="Instagram"
                                                id="fonticon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.youtube.com/channel/UCBs91zb6NGNEyE5kPBd--Jg"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 576 512"
                                                className="YouTube"
                                                id="fonticon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://twitter.com/boscosoft?lang=en"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="Twitter"
                                                id="fonticon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://wa.me/7290007727"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 448 512"
                                                className="Whatsapp"
                                                id="fonticon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4 style={{ marginBottom: "auto" }}>PRODUCTS</h4>
                                <br />
                                <ul>
                                    <li>
                                        <a href="/">&nbsp;CristO</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://religio.cristoerp.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            &nbsp;Religio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">&nbsp;Cathedra</a>
                                    </li>
                                    <li>
                                        <a href="/">&nbsp;Charisma</a>
                                    </li>
                                    <br />
                                    <Track />
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4 style={{ marginBottom: "auto" }}>REGISTERED OFFICE</h4>
                                <br />
                                <ul>
                                    <li> Bosco Soft Technologies Pvt. Ltd. </li>
                                    <li>No. 231/77, S.H.C Complex,</li>
                                    <li>TN 635 601 INDIA.</li>
                                    <li>
                                        <a href="tel:+91 962 680 0800">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 320 512"
                                                className="icon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                                            </svg>
                                            &nbsp;+91 962 680 0800
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@boscosofttech.com">
                                            {" "}
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="icon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                            </svg>{" "}
                                            &nbsp;info@boscosofttech.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4 style={{ marginBottom: "auto" }}>RESOURCE CENTER</h4>
                                <br />
                                <ul>
                                    <li>Bosco Soft Technologies Pvt. Ltd.</li>
                                    <li>Guezou Nagar, Yelagiri Hills,</li>
                                    <li>Tirupattur Dt-635853, India</li>
                                    <br />
                                    <br />
                                    <h4 style={{ marginLeft: 19 }}>Support</h4>
                                    <p id="footbottom" style={{ marginBottom: 0 }}>
                                        <strong style={{ color: "white" }}>Phone :</strong>{" "}
                                        <a href="tel:9786000436">+91 9786 0004 36</a>
                                        <br />
                                        <strong style={{ color: "white" }}>Email:</strong>&nbsp;&nbsp;
                                        <a href="mailto:cristo@boscosofttech.com">
                                            cristo@boscosofttech.com
                                        </a>
                                        <br />
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default MainFooter
