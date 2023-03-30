import React from 'react';
import { IoMdConstruct } from "react-icons/io";
const pageStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const svgStyle = {
    fontSize: '6rem',
    fontFamily: 'Redressed',
    color: 'white'
}

const capStyle = {
    fontFamily: 'Nunito',
    color: '#ffffffaa',
    fontWeight: '600',
    marginTop: '2rem'
}

export const Portfolio = props => {
    return <div style={pageStyle}>
        <IoMdConstruct style={svgStyle} />
        <h2 style={capStyle}>Portfolio page is under construction</h2>
    </div>
}