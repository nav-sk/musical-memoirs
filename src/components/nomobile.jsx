import React from 'react';
import { MdMobileOff } from "react-icons/md";

const pageStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const svgStyle = {
    fontSize: '4rem',
    fontFamily: 'Redressed',
    color: 'white'
}

const capStyle = {
    fontFamily: 'Nunito',
    color: '#ffffffaa',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '2rem'
}

export const NoMobile = props => {
    return <div style={pageStyle}>
        <MdMobileOff style={svgStyle} />
        <h2 style={capStyle}>Designing page for mobile view is under process, kindly use desktop to view</h2>
    </div>
}
