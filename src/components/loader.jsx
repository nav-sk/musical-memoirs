import React from 'react';
import './css/progressloader.css';
import { useEffect, useState } from 'react';

export const Loader = ({ display }) => {
    const [_display, setDisplay] = useState(display);
    useEffect(() => {
        setDisplay(display);
    }, [display]);
    return <div className='progress-wrapper' style={{ display: _display ? "block" : "none" }}>
        <div className='progress-loader'>
            <div className='progress' />
        </div>
    </div>
}