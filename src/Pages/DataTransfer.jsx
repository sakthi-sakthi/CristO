import React from 'react'
import './css/Datatransfer.css'

const DataTransfer = () => {
    return (
        <>
            <div className="section header no-overflow text-black">
                <div className="container w-container">
                    <div className="flex-tl home-header x-margin-btm switch">
                        <div className="hero-heading">
                            <h1>We'll Move your data into CristO for you</h1>
                            <p className="paragraph-lrg">
                                Transferring your data to a new system can be a hassle. That's why
                                we'll do it for you at no extra charge when you sign up. Prefer to do
                                it yourself? CristO Church Management™ makes it easy to import your
                                current data; whether you are using another church management tool or
                                simply a handful of Excel files, you can bulk import your data to be
                                up and running in moments.
                            </p>
                            <div className="flex-ml margin-top-med margin-btm-tiny x-gap">
                                <a
                                    href="/"
                                    className="button w-button"
                                    data-toggle="modal" data-target="#exampleModalCenter"
                                >
                                    Start Free Demo
                                </a>
                            </div>
                        </div>

                        <div className="hero-img">
                            <img
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail.png"
                                loading="eager"
                                sizes="(max-width: 479px) 81vw, (max-width: 767px) 80vw, (max-width: 991px) 79vw, 600px"
                                srcSet="https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail-p-500.png 500w, https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail-p-800.png 800w, https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail-p-1080.png 1080w, https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail-p-1600.png 1600w, https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail-p-2000.png 2000w, https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail-p-2600.png 2600w, https://assets-global.website-files.com/63e2e08df72ab98959f09628/64b04610ce310320def34f79_data-thumbnail.png 3448w"
                                alt="Digital giving apps and tools"
                                className="box-shadow darker z1"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-med text-black">
                <div className="container w-container">
                    <div className="grid-3 gap-lrg">
                        <div
                            id="w-node-_0ef40c0d-f6e8-3766-73ec-1f3246b6dc09-39017fcb"
                            className="wrapper left"
                        >
                            <img
                                loading="lazy"
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e3e86c12d43bd26c2a9c6f_import-retrieve-data.svg"
                                alt=""
                                className="img-product"
                            />
                            <h4>We'll retrieve your data from your current system</h4>
                            <p>
                                Our team will be happy to help you retrieve your current data. We can
                                provide instructions or remotely connect to your computer to export
                                your data from your previous system for you. And as always, there's no
                                additional charge for this.
                            </p>
                        </div>
                        <div
                            id="w-node-_0ef40c0d-f6e8-3766-73ec-1f3246b6dc0f-39017fcb"
                            className="wrapper left"
                        >
                            <img
                                loading="lazy"
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e3e86cb5c824c0074efd3e_import-transfer-data-in.svg"
                                alt=""
                                className="img-product"
                            />
                            <h4>We'll import your existing data into CristO for you</h4>
                            <p>
                                Our team will take your previous data and import it into CristO, all
                                without any additional costs. Our import team has seen nearly every
                                format imaginable and are pros at converting data from previous
                                systems into CristO.
                            </p>
                        </div>
                        <div
                            id="w-node-_0ef40c0d-f6e8-3766-73ec-1f3246b6dc15-39017fcb"
                            className="wrapper left"
                        >
                            <img
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e3e86c44c47618e83161eb_import-help-you.svg"
                                loading="lazy"
                                alt=""
                                className="img-product"
                            />
                            <h4>
                                We'll help you import data yourself (if you'd prefer)
                                <br />
                            </h4>
                            <p>
                                If you're technically minded and would prefer to handle moving into
                                CristO yourself instead of having us do it for you, we'd love to
                                support you. We have detailed transfer instructions for nearly every
                                ChMS out there and you're always welcome to ask us questions.
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="wrapper center margin-top-med">
                        <a
                            data-w-id="0556c5d0-1b02-a150-c89e-6ff41ef60fe1"
                            href="/"
                            className="button w-button"
                            data-toggle="modal" data-target="#exampleModalCenter"
                        >
                            Start Guided Product Tour
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DataTransfer
