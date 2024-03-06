import React, { useState } from 'react';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        const index = (activeIndex - 1 + 3) % 3; // 3 is the total number of slides
        setActiveIndex(index);
    };

    const handleNext = () => {
        const index = (activeIndex + 1) % 3;
        setActiveIndex(index);
    };

    const slides = [
        {
            backgroundImage: "url(assets/img/cristo/04-slide.jpg)",
            title: "<span style='color: #018bd2'>Welcome to</span> <br/> Church Management Software <span style='color:#ff8001'>( CRISTO )</span>",
            content: "Store & organize the member data that’s best for your church <b>“Church Sans Paper”</b> Effective Parish management software is a comprehensive digital solution designed to streamline and enhance the administrative and organizational tasks of a religious congregation.Parish with facilities manage families, members & sacraments.CristO is accessible at the diocesan, parish, family or individual member level.Diocesan administrator can have access to all information related to the diocese.",
        },
        {
            backgroundImage: "url(assets/img/cristo/2-slide.png)",
            title: "Province Management Software <span style='color:#ff8001'>( RELIGIO )</span>",
            content: "A paperless technology driver back office for an administration. <b>“Church Sans Paper”</b> This is a user-friendly software tool for the religious head of a religious institute, province secretary, institute/community heads and for all province members - to manage all communications (circular, email, meetings), create records (chronicles, concerns), maintain member critical and personal information, assignments, history, institution/community information, planning, reporting and archiving.",
        },
        {
            backgroundImage: "url(assets/img/cristo/5-slide.jpg)",
            title: "Diocese Management Software <span style='color:#ff8001'>( CATHEDRA )</span>",
            content: "Diocese Management Software serves as a centralized hub for overseeing the diverse operations within a diocese, streamlining administrative tasks, and fostering better communication and collaboration among clergy, staff, and parishioners. By consolidating parishioner information, personnel records, financial data, and event planning tools into one platform, the software enhances efficiency and organization.",
        },
    ];

    return (
        <section id="hero">
            <div
                id="heroCarousel"
                data-bs-interval={8000}
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <ol className="carousel-indicators" id="hero-carousel-indicators">
                    {slides.map((slide, index) => (
                        <li
                            key={index}
                            data-bs-target="#heroCarousel"
                            data-bs-slide-to={index}
                            className={index === activeIndex ? "active" : ""}
                        />
                    ))}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                            style={{ backgroundImage: slide.backgroundImage }}
                        >
                            <div className="overlay"></div> {/* Add overlay element */}
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown" dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
                                    <p className="animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{ __html: slide.content }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
};

export default Slider;
