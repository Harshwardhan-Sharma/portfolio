import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Harshwardhan</h1>

            <ul className="footer__list">

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://github.com/HarswardhanSharma" className="footer__social-link" target='_blank' rel='noreferrer'>
            <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/harshwardhan-sharma-a63590250/" className="footer__social-link" target='_blank' rel='noreferrer'>
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://www.instagram.com/" className="footer__social-link" target='_blank' rel='noreferrer'>
            <i className="uil uil-instagram"></i>
        </a>
            </div>



            <span className="footer__copy">&#169; Copyright. All right reserved</span>

        </div>
    </footer>
  )
}

export default Footer
