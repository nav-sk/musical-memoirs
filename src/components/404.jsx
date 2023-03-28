import React from 'react';

const pageStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const h1Style  = {
    fontSize: '6rem',
    fontFamily: 'Redressed',
    color: 'white'
}

const capStyle = {
    fontFamily: 'Nunito',
    color: '#ffffffaa',
    fontWeight: '600'
}

export const Page404 = props =>{
    return <div style={pageStyle}>
        <h1 style={h1Style}>404</h1>
        <h2 style={capStyle}>The page you are looking for is not found</h2>
    </div>
}