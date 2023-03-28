import React, { useState, useEffect } from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import './css/contact.css';

export const Contact = props => {

    return <footer className='contact' id='contact'>
        {/* <h2>Contact</h2> */}
        <div className='contact-main'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe height="250px" width="350px" id="gmap_canvas" src="https://maps.google.com/maps?q=chennai institute of technology&t=&z=12&ie=UTF8&iwloc=&output=embed" />
                    </div>
                </div>
                <div className='contact-address'>
                    <h3>Location:</h3>
                    <p>Chennai Institute of Technology,<br />Sarathy Nagar, Kundrathur,<br />Chennai-69</p>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexShrink: 0, flexGrow: 1, flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
                    <div className='site-links'>
                        <h3>Site Links:</h3>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#new-arrival'>New Arrival</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='contact-details'>
                        <h3>Contact:</h3>
                        <p><b>PHONE:</b> +91 1234 567 890</p>
                        <p><b>E-MAIL:</b> abc@xyx.pq</p>
                        <p>On Social Media:</p>
                        <div>
                            <a><FaGithubSquare /></a>
                            <a><FaLinkedin /></a>
                            <a><FaTwitterSquare /></a>
                            <a><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: "flex-end"}}><p className='copyrights'>Copyright &copy; 2023 | All rights reserved</p></div>
            </div>
        </div>

        <div className='made-by'>
            <h3>Made with &hearts; by <span style={{ fontFamily: 'Redressed' }}>Naveen SK</span></h3>
        </div>

    </footer>
}