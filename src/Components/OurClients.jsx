import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './css/OurClients.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const OurClients = () => {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);
    return (
        <>
            <h2 className="mt-4 text-center" id='welcomecristo'>
                Our Clients
            </h2>
            <section className="section-padding" id="section_2">
                <div className="container">
                    <div className="logo-slider" data-v-4ef8651c="">
                        <div className="logos-slide" data-v-4ef8651c="">
                            <OverlayTrigger
                                key={'Eluru-tooltip'}
                                placement='top'
                                overlay={
                                    <Tooltip id={`tooltip-Eluru`}>
                                        Eluru Tooltip
                                    </Tooltip>
                                }
                            >
                                <img
                                    src="https://religio.cristoerp.com/assets/img/ClientLogo/Eluru.jfif"
                                    data-bs-toggle="tooltip"
                                    alt="Eluru"
                                />
                            </OverlayTrigger>
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/IBVM.png"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/KJP%20-%20Raipur.png"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/LASAD.jfif"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/MMI.jfif"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/MSHJ.jfif"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/Nagpur%20-%20Pallottines.jfif"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/SCB.png"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/SHM.png"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/SKP.png"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/fotor-2024030110421.png"
                                alt="cristo"
                            />
                            <img
                                src="https://religio.cristoerp.com/assets/img/ClientLogo/SVD.png"
                                alt="cristo"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurClients
