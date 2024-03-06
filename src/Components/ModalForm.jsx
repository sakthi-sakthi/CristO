import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import HCaptcha from '@hcaptcha/react-hcaptcha';


const ModalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const modalShown = sessionStorage.getItem('modalShown');
        if (!modalShown) {
            const timer = setTimeout(() => {
                const modal = document.getElementById('exampleModalCenter');
                if (modal) {
                    const modalInstance = new window.bootstrap.Modal(modal);
                    modalInstance.show();
                    sessionStorage.setItem('modalShown', 'true');
                }
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleVerification = (token) => {
        console.log('hCaptcha token:', token);
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
            Swal.fire({
                title: 'Oops...!',
                text: 'All Fields are Required.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            Swal.fire({
                title: 'Oops...!',
                text: 'Mobile number should be 10 digits.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        try {
            const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', {
                sender: { email: 'sakthiganapathis97@gmail.com' },
                to: [{ email: formData.email }],
                cc: [{ email: 'muniraj@dbcyelagiri.edu.in' }],
                subject: '30-Days Free Trial',
                htmlContent: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Email</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f8f9fa;
                padding: 20px;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                padding: 30px;
              }
              .message-box {
                padding: 20px;
                border-left: 4px solid #007bff;
                font-style: italic;
                background-color: #f0f0f0;
                margin-top: 20px;
                border-radius: 5px;
              }
              .btn {
                background-color: #007bff;
                color: #fff;
                padding: 10px 20px;
                border-radius: 5px;
                text-decoration: none;
                transition: background-color 0.3s ease;
              }
              .btn:hover {
                background-color: #0056b3;
                color:#fff
              }
              h2 {
                color: #007bff;
                text-align: center;
                margin-bottom: 20px;
              }
              p {
                font-size: 16px;
                line-height: 1.6;
              }
              b {
                color: #007bff;
              }
              .footer-text {
                text-align: center;
                margin-top: 20px;
                font-size: 14px;
              }
              .footer-text a {
                color: #007bff;
                text-decoration: none;
              }
              .footer-text a:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <h2>New Message from ${document.getElementById("name").value}</h2>
              <p>Hello <b>Admin,</b></p>
              <div class="message-box">
                    <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
                    <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
                    <p><strong>Mobile:</strong> <a href="tel:${document.getElementById("mobile").value}">${document.getElementById("mobile").value}</a></p>
                    <p><strong>Message:</strong> ${document.getElementById("message").value}</p>
              </div>
              <p>Best wishes,<br><b>CristO team</b></p>
              <hr>
              <p>If you want to visit our Website, click the button below:</p>
              <a href="https://cristoerp.com/" target="_blank" class="btn">Visit Website</a>
              <div class="footer-text">
              <p>Thank you for reaching out! For more information, visit our website <a href="https://cristoerp.com/" target="_blank">here</a>.</p>
              </div>
            </div>
          </body>
          </html>
          `
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': ''
                }
            });

            if (response.status === 201) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your request has been sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send email.');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send message. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
                data-backdrop="static"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                <b>Unleash Your Abilities with a Complimentary Demo</b>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" style={{ color: "#002856 !important" }}>×</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <form
                                        method="post"
                                        id="myForm"
                                        className="php-email-form"
                                        autoComplete="off"
                                        onSubmit={handleSubmit}
                                        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "17px 17px 0px 17px", backgroundColor: "#f9f9f9" }}
                                    >
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="name">
                                                    Name <span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="mobile">
                                                    Mobile <span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="mobile"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="email">
                                                    Email <span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">
                                                Message <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                id="message"
                                                rows={3}
                                                placeholder="Start Typing..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <HCaptcha
                                            sitekey="40cb98d0-9bcb-4619-a1ed-8f14fe83b6cc"
                                            onVerify={(token) => handleVerification(token)}
                                        />

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                            id="submitBtn"
                                        >
                                            Activate Free Demo
                                        </button>
                                        <br />
                                        <br />
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <div className="trial-process">
                                        <h5><b>Experience it Now:</b></h5>
                                        <p>Embark on your Demo journey by following these simple steps:</p>
                                        &#10004; Fill out the form to your left.<br />
                                        &#10004; Tap the "Activate Free Demo" button below.<br />
                                        &#10004; Keep an eye on your inbox for next steps.<br /><br />
                                        <h5><b>Location:</b></h5>
                                        <p>Bosco Soft Technologies Pvt. Ltd, <br />Suite 231/77, S.H.C Complex,<br />Tamil Nadu, India, 635601</p>
                                        <h5><b>Email:</b></h5>
                                        <p><a href="mailto:info@boscosofttech.com">info@boscosofttech.com</a></p>
                                        <h5><b>Mobile:</b></h5>
                                        <p><a href="tel:9786000436">+91-9786000436</a></p>
                                    </div>
                                </div>
                                <small className="text-center mt-3">
                                    By clicking "Start Your Free Demo", you agree to our{" "}
                                    <a href="/">Terms</a> and acknowledge our{" "}
                                    <a href="/">Privacy Policy</a>.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalForm;
