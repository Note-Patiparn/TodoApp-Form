import React from 'react'

function Footer() {
    const footerText = 'This is Footer section'
    return (
        <footer className ='footer__container'>
            <h1 className ='footer__container--title'> {`${footerText}`} </h1>
        </footer>
    )
}


export default Footer