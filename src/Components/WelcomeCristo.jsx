import React from 'react'

const WelcomeCristo = () => {
    return (
        <>
            <h2 className="mt-4 text-center" id='welcomecristo'>
                Welcome to the Smartest Way to Energise your
                <br /> <b style={{ color: "#018bd2" }}>Parish, Province, Diocese</b>
            </h2>
            <section className="section-padding" id="section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <img
                                src="https://cristoerp.com/wp-content/uploads/2023/08/tourrequest-min.png"
                                className="custom-text-box-image img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="custom-text-box">
                                <h4 className="mb-2 text-black"><b>Start a Guided Tour</b></h4>
                                <br />
                                <p className="text-black" id="aboutcontent">
                                    Experience CristO ChMS firsthand with our guided tour! Loaded with demo data, it offers instant access to explore its features without the need for setup. Dive in to navigate modules, interact with functionalities, and assess its fit for your needs before committing. Ready to embark on this insightful journey? Begin your tour today!
                                </p>
                                <p
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    className="buttonguid w-button"
                                >
                                    Start Guided Tour
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WelcomeCristo
