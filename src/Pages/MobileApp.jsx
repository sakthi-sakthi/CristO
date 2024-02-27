import React from 'react'
import './css/Mobile.css'

const MobileApp = () => {
    return (
        <>
            <>
                <div className="section-title">
                </div>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center" id="mobhead" style={{ color: "#002856" }}>
                            <b>Mobile App</b>
                        </h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* First column */}
                        <div className="col-md-6">
                            <center>
                                <h1 className="title">
                                    Manage your Church from your Phone
                                </h1>
                                <p className="paragraph">
                                    Download customize CristO app for iOS or Android and get everything CristO Church Management™ offers on your mobile device.
                                </p>
                                <img
                                    src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/6494883b92e570c9f93204bd_app-store-download%201.png"
                                    loading="lazy"
                                    alt=""
                                    className="button-app"
                                />
                                &nbsp;&nbsp;&nbsp;
                                <img
                                    src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/6494883b0f431d41489c9b03_google-play-badge%201.png"
                                    loading="lazy"
                                    alt=""
                                    className="button-app"
                                />
                                <br />
                                <br />
                            </center>
                        </div>
                        {/* Second column */}
                        <div className="col-md-6">
                            <img src="assets/img/cristo/mobileheader.png" id="imgcol" alt='cristo' />
                        </div>
                    </div>
                </div>
                <div className="section mobileapp section-med bg-light-blue is-app wf-section">
                    <div className="container w-container">

                        <div className="flex-msb border-app swap">
                            <div className="wrapper stretch">
                                {/* <h2>Connect with Your People</h2> */}
                                <div className="eyebrow">CristO App</div>
                                <h1 className="mobile-margin-btm">
                                    For Parish Admin
                                    <br />
                                </h1>
                                <ul className="list-bullet">
                                    <li className="margin-btm-sml">
                                        Add new church Families, Members, Sacraments, BCC, Commission,
                                        Association, Prayer Request, Donation and Subscription details of
                                        the parish.
                                        <br />
                                    </li>
                                    <li>
                                        You can focus more on your mission.
                                        <br />
                                    </li>
                                    <a
                                        href="https://parish.cristoerp.com/mobile"
                                        style={{ marginTop: 21 }}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link-text w-inline-block"
                                    >
                                        <div className="text-in-link">Learn More</div>
                                        <div className="small-arrowlink txt-blue w-embed">
                                            <svg
                                                viewBox="0 0 96 96"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title />
                                                <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
                                            </svg>
                                        </div>
                                    </a>
                                </ul>
                            </div>
                            <img
                                src="assets/img/cristo/Mobile-1.png"
                                className="app-screenshot"
                                alt="cristo app dashboard"
                            />
                        </div>
                        <div className="flex-msb border-app">
                            <div className="wrapper stretch">
                                <div className="eyebrow">Religio App</div>
                                <h1 className="mobile-margin-btm">
                                    For Province Admin
                                    <br />
                                </h1>
                                <ul className="list-bullet">
                                    <li className="margin-btm-sml">
                                        Create &amp; Maintain Member Profile (Education, Sacraments,
                                        Profession, Formation, Holy Order etc.…) for the Province.
                                        <br />
                                    </li>
                                    <li>
                                        Publishing Calendar Events &amp; Circular’s and sending them through
                                        our application.
                                        <br />
                                    </li>{" "}
                                    <a
                                        href="https://religio.cristoerp.com/mobile-app/"
                                        style={{ marginTop: 21 }}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link-text w-inline-block"
                                    >
                                        <div className="text-in-link">Learn More</div>
                                        <div className="small-arrowlink txt-blue w-embed">
                                            <svg
                                                viewBox="0 0 96 96"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title />
                                                <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
                                            </svg>
                                        </div>
                                    </a>
                                </ul>
                            </div>
                            <img
                                src="assets/img/cristo/Mobile (1).png"
                                className="app-screenshot"
                                alt="Cristo"
                            />
                        </div>
                        <div className="flex-msb border-app swap no-border">
                            <div className="wrapper stretch">
                                <div className="eyebrow">Cathedra App</div>
                                <h1 className="mobile-margin-btm">
                                    For Diocese Admin
                                    <br />
                                </h1>
                                <ul className="list-bullet">
                                    <li className="margin-btm-sml">
                                        Manage all communications (bishop program,diocese
                                        update,newsletter,circular, email, meetings), create records and
                                        maintain member profile and personal information, appointments,
                                        vicariate, parish information, reporting and archiving.
                                        <br />
                                    </li>
                                    <li>
                                        Manage, communicate, and grow with Diocese.
                                        <br />
                                    </li>
                                    <a
                                        href="/"
                                        style={{ marginTop: 21 }}
                                        target="_blank"
                                        className="link-text w-inline-block"
                                    >
                                        <div className="text-in-link">Learn More</div>
                                        <div className="small-arrowlink txt-blue w-embed">
                                            <svg
                                                viewBox="0 0 96 96"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title />
                                                <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
                                            </svg>
                                        </div>
                                    </a>
                                </ul>
                            </div>
                            <img
                                src="assets/img/cristo/Mobile-2.png"
                                className="app-screenshot"
                                alt="cathedra app dashboard"
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default MobileApp
