import React from 'react'
import './css/Security.css'

const Security = () => {
    return (
        <>
            <br />
            <br />
            <section className="container-fluid px-0">
                <div
                    className="row align-items-center h-100 mx-0 py-5 cees3-hero-bg-01"
                    style={{
                        width: "100vw",
                        backgroundImage: "url(assets/img/cristo/software-banner.jpg)"
                    }}
                >
                    <div className="col-lg-6 py-3 py-lg-5 ps-5 hero-drop-shadow text-shadow-sm">
                        <h1 className="text-light">Data Security Solutions</h1>
                        <h2 className="h3 text-light">Building Innovation, Securing Data</h2>
                        <div className="py-4 text-light">
                            <p className="callout">
                                Protecting your data is paramount in today's digital landscape. Our software development team understands the importance of robust data security measures.
                            </p>
                        </div>
                        <a
                            href="/"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            className="btn btn-primary getstarted"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            <section className="container pt-5 pt-lg-6">
                <h2 className="text-center" id='sectitle'>"Fortifying the Digital Fortress Strategies for Robust Data Security"</h2>
                <p className="text-center text-muted mb-5 mx-auto mw-100 sm-txt-left">
                    "Explore cutting-edge techniques and protocols to safeguard sensitive information against cyber threats. This comprehensive guide navigates the intricate landscape of data security, ensuring resilience and integrity in an ever-evolving digital environment."
                </p>
                <div className="row align-items-center py-3">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/Storage-Icon.png"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-3" id='sectitle'>Client Data Handle with Care</h3>
                        <ul className="tick-list">
                            <li className="tick-mark">
                                In accordance with, and only to the extent permissible under this
                                Agreement and the Contract;
                            </li>
                            <li className="tick-mark">
                                In full compliance with any and all applicable laws and regulations, only
                                to the extent applicable to the Service Provider.
                            </li>
                            <li className="tick-mark">
                                Any transmission, transportation, or storage of Client Data outside of
                                the main server in the to the local desktop / laptop computers in the parish
                                office is prohibited except on prior written authorization by the Client.
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="row align-items-center py-3">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/data.png"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-3" id='sectitle'>Safeguarding Client Data</h3>
                        <ul className="tick-list">
                            <li className="tick-mark">
                                Service Provider shall implement controls reasonably necessary
                                to prevent a breach.
                            </li>
                            <li className="tick-mark">
                                The System shall use secure protocols and encryption to
                                safeguard Client Data in transit.
                            </li>
                            <li className="tick-mark">
                                Enable an appropriate level of auditing and logging for the
                                operating system and applications.
                            </li>
                            <li className="tick-mark">
                                The System shall allow the changing of System and user
                                passwords.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row align-items-center py-3">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/supportnew.png"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-3" id='sectitle'>Product Maintenance and Support</h3>
                        <ul className="tick-list">
                            <li className="tick-mark">
                                Service Provider shall have a process for the timely review,
                                testing, and installation of patches essential for safeguarding
                                the confidentiality, integrity, or availability of the System or
                                Client Data.
                            </li>
                            <li className="tick-mark">
                                Service Provider shall ensure that the product is supported,
                                provided that Client maintains the requisite subscriptions.
                                Service Provider shall provide Client with notice 12 months
                                before the product becomes unsupported.
                            </li>
                            <li className="tick-mark">
                                If necessary, and provided that Client maintains the
                                requisite subscriptions, Service Provider shall provide remote
                                support via a secure connection method that includes an audit
                                log of events. Remote access shall be limited to an as-needed or
                                as-requested basis.
                            </li>
                            <li className="tick-mark">
                                Service Provider shall implement controls reasonably
                                necessary to prevent unauthorized use, disclosure, loss,
                                acquisition of, or access to Client Data. This includes, but is
                                not limited to personnel security measures, such as background
                                checks.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row align-items-center py-3">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/termination.png"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-3" id='sectitle'>Termination Procedures</h3>
                        <ul className="tick-list">
                            <li className="tick-mark">
                                Upon expiration or termination of the Contract, Service Provider shall
                                ensure that no Data Breach occurs and shall follow the Client’s
                                instructions as to the preservation, transfer, or destruction of
                                Client Data.
                            </li>
                            <li className="tick-mark">
                                The method of destruction shall be accomplished by
                                “purging” or “physical destruction”, in accordance with industry
                                standard norm.
                            </li>
                            <li className="tick-mark">
                                Upon request by the Client, Service Provider shall
                                certify in writing to Client that return or destruction of data has
                                been completed.
                            </li>
                            <li className="tick-mark">
                                Prior to such return or destruction, Service Provider
                                shall continue to protect Client Data in accordance with this
                                Agreement.
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

        </>

    )
}

export default Security
