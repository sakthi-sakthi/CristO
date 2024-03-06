import React from 'react'
import './css/Support.css'

const SupportCenter = () => {
  return (
    <>
      <section className="section-padding" id="section_2">
        <br />
        <br />
        <br />
        <br />
        <h1 className='text-black text-center'><b>Customer Support</b></h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 mb-5 mb-lg-0">
              <img
                src="assets/img/cristo/support1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-12">
              <div className="custom-text-box">
                <h4 className="mb-2 text-black"><b>Everything you and your ministry need to be successful with CristO
                </b></h4>
                <br />
                <p className="text-black" id="aboutcontent">
                  We have an expert team of professionals available to answer questions and to assist you with supporting CristO and ensure your success with our products. We also have ways for you to find the answers that you are looking for just by submitting a ticket within your CristO platform. We also offer online education resources, support videos, training opportunities and events.
                </p>
                <p
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  className="getstarted buttonguid w-button"
                >
                  Start Guided Tour
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title">
          <h3>
            {" "}
            <span style={{ color: "#0f224d" }}>
              How can we help your church with CristO?
            </span>
          </h3>
          <p className="text-black text-center" id="aboutcontent">
            We have an expert team of professionals available to answer questions and to assist you with supporting CristO and ensure your success with our products. We also have ways for you to find the answers that you are looking for just by submitting a ticket within your CristO platform. We also offer online education resources, support videos, training opportunities and events.
          </p>
        </div>
        <div className="container py-5">
          <div className="row pb-5 mb-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Product Tour</center>
                  </h5>
                  <img
                    src="https://religio.cristoerp.com/assets/img/religio/sales.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:imman@boscosofttech.com">
                        imman@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:9786000436">9786000436</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Support Team</center>
                  </h5>
                  <img
                    src="https://religio.cristoerp.com/assets/img/religio/support.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:cristo@boscosofttech.com">
                        cristo@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:9786000436">9786000436</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Sales Team</center>
                  </h5>
                  <img
                    src="https://religio.cristoerp.com/assets/img/religio/sales.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:alwinj@boscosofttech.com">
                        alwinj@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:7395848924">7395848924</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Product Videos</center>
                  </h5>
                  <img
                    src="https://religio.cristoerp.com/assets/img/religio/video.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:alwinj@boscosofttech.com">
                        alwinj@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:7395848924">7395848924</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SupportCenter
