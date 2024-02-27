import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <>
      <section className="section-padding bg-all text-black mt-5" id="section_2">
        <h2 className='text-center mt-4' style={{ fontWeight: "bold", fontSize: "40px" }}>About <b style={{ color: "#018bd2" }}>CristO</b></h2>
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
          <div className='col-12 mt-5'>
            <p className="text-black" id="aboutcontent">
              <b><h3>&#10004; Parokia - Parish Management</h3></b>
              <br />
              Revamp your church's member management system with "Church Sans Paper." Our advanced Parish management software, Parokia, is tailored to revolutionize the way you handle administrative and organizational tasks. Seamlessly manage families, members, and sacraments with unparalleled ease. Whether you're a diocesan administrator looking for comprehensive diocese insights or a member seeking individual details, Parokia has got you covered at every level. Modernize, Organize, and Transform your religious community's management.
            </p>

            <p className="text-black" id="aboutcontent">
              <b><h3>&#10004; ReligiO - Province Management</h3></b>
              <br />
              "Paperless Congregation" This sophisticated software solution is tailor-made for religious leaders, provincial administrators, and community figureheads, as well as all members within a province. Seamlessly handle communications (from circulars and emails to meeting setups), generate and store vital records (including chronicles and concerns), protect members' confidential and personal details, oversee assignments, maintain historical data, manage institutional information, and bolster your planning, reporting, and archiving processes. Elevate your administrative tasks to a new standard of efficiency and security.
            </p>

            <p className="text-black" id="aboutcontent">
              <b><h3>&#10004; Cathedra - Diocese Management</h3></b>
              <br />
              Embrace the future with "Diocese Sans Paper". Cathedra is the pinnacle of Diocese Management Software crafted exclusively for Catholic Dioceses. Infused with modern technology and designed for unparalleled ease of use, it's the trusted companion for Bishops, Chancellors, Secretaries, and every diocese member.
            </p>

            <p className="text-black" id="aboutcontent">
              <b><h3>&#10004; Charisma - Denomination Church</h3></b>
              <br />
              Revamp your church's member management system with Charisma. Our advanced Church management software, Charisma, is tailored to revolutionize the way you handle administrative and organizational tasks for your church.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCristo
