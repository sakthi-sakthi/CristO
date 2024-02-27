import React from 'react';
import './css/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <section className="section-padding bg-all text-black" id="section_2">
                <div className="container margin-top-xl w-container">
                    <div className="wrapper-75 center margin-btm-med">
                        <h2>We’re Here to Support your Church and Make your Job Easier</h2>
                    </div>
                    <div className="grid-3 gap-med">
                        <div
                            id="w-node-_01f78727-8ee0-6a78-d3de-b049bbb8fc85-39017ee8"
                            className="wrapper center"
                        >
                            <img
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e3268889fc0b98022a7b0f_moving-truck.webp"
                                loading="lazy"
                                alt=""
                                className="img-90 margin-btm-sml center"
                            />
                            <h3>
                                Stress-free Move In <br />
                                (We do it for you!)
                            </h3>
                            <p className="x-margin-btm">
                                Moving your data to a new{" "}
                                <a href="/">
                                    church management software
                                </a>{" "}
                                can feel intimidating. That’s why we’ll do the work for you–for free!
                                Our import team will work to export the data out of your existing system
                                and import it into your new Breeze account.
                                <br />
                                <div className='mt-3'>
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
                                <br />
                            </p>
                        </div>
                        <div
                            id="w-node-_23c373e3-84de-ba0b-fde2-ba6303bff4ff-39017ee8"
                            className="wrapper center"
                        >
                            <img
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e3268819af3beee3ea974c_support-icon.webp"
                                loading="lazy"
                                alt=""
                                className="img-90 margin-btm-sml center"
                            />
                            <h3>
                                Free Support <br />
                                When You Need It
                            </h3>
                            <p className="x-margin-btm">
                                Email help support is great, but sometimes you just want to pick up the
                                phone and talk through a question. That’s why Breeze offers both email
                                and phone support with your account for no extra charge. Get the support
                                you need, in whichever way is best for you.
                                <br />
                                <div className='mt-3'>
                                    <Link to={"/supportcenter"} className="link-text w-inline-block">
                                        <div className="text-in-link">Get Support</div>
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
                                <br />
                            </p>
                        </div>
                        <div
                            id="w-node-c0622dbc-2f57-2698-4b7d-70043410365a-39017ee8"
                            className="wrapper center"
                        >
                            <img
                                src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e326885030a74677db5f91_usage-icon.webp"
                                loading="lazy"
                                alt=""
                                className="img-90 margin-btm-sml center"
                            />
                            <h3>Increased Staff &amp; Volunteer Usage</h3>
                            <p className="x-margin-btm">
                                We believe powerful church management software shouldn’t require an IT
                                degree to use. Breeze’s intuitive design is built to help streamline
                                work processes and increase adoption by the entire church so everyone
                                can benefit, and anyone can manage it.
                                <br />
                                <div className='mt-3'>
                                    <a
                                        href="/"
                                        target="_blank"
                                        className="link-text w-inline-block"
                                        rel="noreferrer"
                                    >
                                        <div className="text-in-link">View All Features</div>
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
                                </div>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Products;
