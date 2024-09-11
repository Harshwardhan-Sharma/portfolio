import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const[toggleState, setToggleState] =useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">
      <div className="services__content">
        <div>
          <i className="uil uil-browser services__icon"></i>
          <h3 className="services__title">Web <br/> Developer</h3>
        </div>

        <span className="services__button" onClick={()=>{toggleTab(1)}}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">

            <i onClick={()=>{toggleTab(0)}} className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title">Web Developer</h3>

            <p className="services__modal-description">Crafting dynamic applications and delivering effective solutions.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I design intuitive, engaging web pages.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I optimize your brand’s online impact.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I create engaging, user-friendly UX interactions.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I provide full-spectrum design solutions.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I design web solutions aligned with branding.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services__content">
        <div>
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">UI/UX <br/> Designer</h3>
        </div>

        <span className="services__button"
        onClick={()=>{toggleTab(2)}}
        >View More <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">

            <i className="uil uil-times services__modal-close"
            onClick={()=>{toggleTab(0)}}
            ></i>

            <h3 className="services__modal-title">UI/UX Developer</h3>

            <p className="services__modal-description">Crafting intuitive interfaces and designing effective user experiences.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Crafting intuitive user interfaces.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Specializing in comprehensive application development.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Designing engaging UX element interactions.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Positioning brands for digital impact.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Creating design mockups for Clients.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services__content">
        <div>
          <i className="uil uil-mobile-android services__icon"></i>
          <h3 className="services__title">Android <br/> Developer</h3>
        </div>

        <span className="services__button"
        onClick={()=>{toggleTab(3)}}
        >View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">

            <i className="uil uil-times services__modal-close"
            onClick={()=>{toggleTab(0)}}
            ></i>

            <h3 className="services__modal-title">Android Developer</h3>

            <p className="services__modal-description">Crafting robust, user-friendly apps with foundational skills.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Designing intuitive Android user interfaces.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Expert in Android development and integration.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Crafting engaging UX for Android.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Positioning your app’s brand effectively.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Designing mockups for Android apps.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   </section>
  )
}

export default Services
