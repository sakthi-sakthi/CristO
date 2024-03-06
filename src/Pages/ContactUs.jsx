
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: '',
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
        if (!formData.name || !formData.email || !formData.mobile || !formData.address || !formData.message) {
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
                    <p><strong>Address:</strong> ${document.getElementById("address").value}</p>
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
                    'api-key': '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'
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
                    address: '',
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
            <main id="main">
                <section id="contact" className="contact mt-5">
                    <div className="container">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15580.775022626038!2d78.569466!3d12.503313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac5479d7985c59%3A0x87189b52ee2bb632!2sBosco%20Soft%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1709016667223!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: 350 }}
                                allowFullScreen=""
                                loading="lazy"
                                title='CristO'
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt" />
                                        <h4>Location:</h4>
                                        <p>
                                            Bosco Soft Technologies Pvt. Ltd, No. 231/77, S.H.C Complex,
                                            TamilNadu , India , 635601
                                        </p>
                                    </div>
                                    <div className="email">
                                        <i className="bi bi-envelope" />
                                        <h4>Email:</h4>
                                        <a href='mailto:info@boscosofttech.com'>
                                            <p>info@boscosofttech.com</p>
                                        </a>
                                    </div>
                                    <div className="phone">
                                        <i className="bi bi-phone" />
                                        <h4>Call:</h4>
                                        <a href='tel:9786000436'>
                                            <p>+91 9786000436</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-5 mt-lg-0" id="contform">
                                <form method="post" id="myForm" className="php-email-form" autoComplete="off"
                                    onSubmit={handleSubmit} style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "17px 17px 9px 17px", backgroundColor: "#f9f9f9" }}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="name">
                                                Name <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <label htmlFor="name">
                                                Email <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="name">
                                                Mobile Number <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="mobile"
                                                className="form-control"
                                                name="mobile"
                                                id="mobile"
                                                placeholder="Mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <label htmlFor="name">
                                                Address <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                id="address"
                                                placeholder="Your Address"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">
                                            Message <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            rows={3}
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <HCaptcha
                                        sitekey="40cb98d0-9bcb-4619-a1ed-8f14fe83b6cc"
                                        onVerify={(token) => handleVerification(token)}
                                    />
                                    <div className="text-center">
                                        <button type="submit" className=" btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Contact Section */}
            </main>
        </>
    )
}

export default ContactUs
