import React, { useState, useEffect } from 'react';
import './css/newsletter.css';

export const NewsLetter = props => {

    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [email, setEmail] = useState("");

    const onEmailChange = e => {
        setEmail(e.target.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.currentTarget.value)) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }
    const submitClick = e => {
        e.target.innerHTML = "Subscribed";
    }
    const onFormSubmit = e => {
        e.preventDefault();

    }

    return <div className='newsletter' id='newsletter' data-aos='fade-up' data-aos-offset='0'>
        <p className='head'>Want to engage with us?</p>
        <p className='body'>Subscribe to our newsletter</p>
        <form onSubmit={onFormSubmit}>
            <input type='email' placeholder='Your Email Address' value={email} onChange={onEmailChange} />
            <button disabled={submitDisabled} onClick={submitClick}>Subscribe</button>
        </form>
    </div>
}