import React from 'react'
import { Link } from 'react-router-dom'

const DataTransfer = () => {
    return (
        <>
            <section className="section-padding" id="section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="custom-text-box">
                                <h2 className="mb-2" id="datatransfer">We Offer Complimentary Data Transfers</h2>
                                <br />
                                <p className="text-black" id="aboutcontent">
                                    When you opt for any of our premium plans, we'll handle the hassle of migrating your data into CristO at no additional cost, regardless of its current location. If you prefer a DIY approach, our user-friendly tools are at your disposal to swiftly and effortlessly set up your account.
                                </p>
                                <div>
                                    <Link to={"/datatransfer"} className="link-text w-inline-block">
                                        <div className="text-in-link">Read More</div>
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 mb-5 mb-lg-0">
                            <img
                                src="https://cristoerp.com/wp-content/uploads/2023/08/transfer.webp"
                                className="custom-text-box-image img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default DataTransfer
