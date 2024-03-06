import React, { useState } from 'react';
import './css/Team.css';

const OurTeam = () => {
    const [activeTab, setActiveTab] = useState('All');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="team-area">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2 className="mt-4 text-center" id='welcomecristo'>
                            <b>Our Team</b>
                        </h2>
                    </div>
                </div>
                <div className="container">
                    {/* Tabs */}
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'All' ? 'active' : ''}`}
                                onClick={() => handleTabClick('All')}
                            >
                                All Team Members
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'Development' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Development')}
                            >
                                Development
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'supportTraining' ? 'active' : ''}`}
                                onClick={() => handleTabClick('supportTraining')}
                            >
                                Support Training
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'salesTeam' ? 'active' : ''}`}
                                onClick={() => handleTabClick('salesTeam')}
                            >
                                Sales Team
                            </button>
                        </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="tab-content">
                        <div className={`tab-pane fade show ${activeTab === 'All' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="single-team">
                                        <div className="img-area">
                                            <img
                                                src="assets/img/team/immanuel.jpg"
                                                className="img-responsive"
                                                alt=""
                                            />
                                            <div className="social">
                                            </div>
                                        </div>
                                        <div className="img-text">
                                            <h4>Immanuel Kumar</h4>
                                            <h5>Director, Product Dev (CristO)</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="single-team">
                                        <div className="img-area">
                                            <img
                                                src="assets/img/team/augustin-stalin.jpg"
                                                className="img-responsive"
                                                alt=""
                                            />
                                            <div className="social">
                                            </div>
                                        </div>
                                        <div className="img-text">
                                            <h4>Augustin Stalin</h4>
                                            <h5>Senior Program Lead</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`tab-pane fade show ${activeTab === 'Development' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="single-team">
                                        <div className="img-area">
                                            <img
                                                src="assets/img/team/augustin-stalin.jpg"
                                                className="img-responsive"
                                                alt=""
                                            />
                                            <div className="social">
                                            </div>
                                        </div>
                                        <div className="img-text">
                                            <h4>Augustin Stalin</h4>
                                            <h5>Senior Program Lead</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`tab-pane fade show ${activeTab === 'supportTraining' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="single-team">
                                        <div className="img-area">
                                            <img
                                                src="https://i.postimg.cc/wMMhrMDm/2.jpg"
                                                className="img-responsive"
                                                alt=""
                                            />
                                            <div className="social">
                                            </div>
                                        </div>
                                        <div className="img-text">
                                            <h4>John Doe</h4>
                                            <h5>Web Designer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`tab-pane fade show ${activeTab === 'salesTeam' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="single-team">
                                        <div className="img-area">
                                            <img
                                                src="https://i.postimg.cc/wMMhrMDm/2.jpg"
                                                className="img-responsive"
                                                alt=""
                                            />
                                            <div className="social">
                                            </div>
                                        </div>
                                        <div className="img-text">
                                            <h4>John Doe</h4>
                                            <h5>Web Designer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
