import React from 'react'

const VissionMission = () => {
    return (
        <>
            <section className="container-fluid px-0">
                <div
                    className="row align-items-center h-100 mx-0 py-5 cees3-hero-bg-01"
                    style={{
                        width: "100vw",
                        backgroundImage: "url(assets/img/cristo/mission-vision.jpg)"
                    }}
                >
                    <div className="col-lg-6 py-3 py-lg-5 ps-5 hero-drop-shadow text-shadow-sm">
                        <h1 className="text-light">CRISTO | CHURCH MANAGEMNT VISION</h1>
                        <h2 className="h3 text-light">Building Innovation</h2>
                        <div className="py-4 text-light">
                            <p className="callout">
                                Our vision is to help create and sustain healthy systems and
                                organizations.
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
            <section className="container pt-5 pt-lg-6" id="vision">
                <div className="row align-items-center py-3">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/purpose.svg"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-2">Purpose</h3>
                        <p className="mb-4">
                            It describes the software function and non-functional requirements for release 1.0.0 of
                            CristO. This document is intended to be used by the member s of the project team who will
                            implement and verify the correct functioning of the system.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center py-3">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/scope.jpg"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-2">Scope</h3>
                        <p className="mb-4">
                            The scope of the application is to maintain the Families, Members, Sacraments, BCC,
                            Commission, Association, Prayer Request, Donation and Subscription details of the parish.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center border-bottom pt-3 pb-5">
                    <div className="col-sm-3 col-md-2">
                        <img
                            className="d-block mx-auto"
                            src="assets/img/cristo/vision.svg"
                            alt="CristO"
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col-sm-9 col-md-10">
                        <h3 className="mb-2">Vision</h3>
                        <p className="mb-4">
                            It a user friendly software tool for the Diocese and Parish. It organizes and manages the
                            information of the diocese, parishes, families and members in most economical and effective
                            way.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default VissionMission
