import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const AboutCristo = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <section className="section-padding bg-all text-black" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="custom-text-box">
                            <h2 id='aboutmy'>
                                <b style={{ color: "#018bd2" }}>CristO</b>
                                &nbsp;Church Administrative Software
                            </h2>
                            <br />
                            <p className="text-black" id="aboutcontent">
                                CristO (ChMS) is software tailored for churches and religious entities to simplify and coordinate diverse administrative responsibilities. This platform assists in organizing member details, overseeing sacrament records, monitoring attendance, managing donations, planning events, and enhancing communication. By centralizing and automating these processes, CristO (ChMS) allows church leaders to prioritize nurturing community ties, promoting spiritual development, and deepening member interactions.
                            </p>
                            <div>
                                <Link to={"/aboutcristo"} className="link-text w-inline-block">
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
                    <div className="col-lg-6">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="assets/img/cristo/New-links-low-1.jpg"
                                    className="custom-text-box-image img-fluids"
                                    alt=""
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <img
                                    src="assets/img/cristo/religiimg.png"
                                    className="custom-text-box-image img-fluids"
                                    alt=""
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <img
                                    src="assets/img/cristo/New-links-low-3.jpg"
                                    className="custom-text-box-image img-fluids"
                                    alt=""
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div>
                                <img
                                    src="assets/img/cristo/New-links-low-4.jpg"
                                    className="custom-text-box-image img-fluids"
                                    alt=""
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCristo;
