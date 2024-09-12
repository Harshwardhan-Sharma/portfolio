import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const [toggleCard, setToggleCard] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const toggleCardTab = (index) => {
        setToggleCard(index);
    }

  return (
   <section className="qualification section" id='services'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">
            My personel journey
        </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"
                }
                
                onClick={() => toggleTab(1)}

                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className={ toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                
                onClick={() => toggleTab(2)}

                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                       <div className="qualification__sections-container sections-container grid">

                       <div className="qualification__card-content">

    <div>
      <i className="uil uil-browser qualification__card-icon"></i>
   <h3 className="qualification__card-title">Web <br/> Developer</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(1)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 1 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Web Developer</h3>

<p className="qualification__card-modal-description">Crafting dynamic applications and delivering effective solutions.
</p>

<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
I design intuitive, engaging web pages.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">I optimize your brand’s online impact.
</p>
</li>
</ul>
</div>
 </div>

                       </div>  

                       <div className="qualification__card-content">

<div>
  <i className="uil uil-browser qualification__card-icon"></i>
   <h3 className="qualification__card-title">app <br/> Developer</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(2)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 2 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">app Developer</h3>

<p className="qualification__card-modal-description">Crafting dynamic applications and delivering effective solutions.
</p>

<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
I design intuitive, engaging web pages.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">I optimize your brand’s online impact.
</p>
</li>
</ul>
</div>
 </div>

                       </div> 


                       <div className="qualification__card-content">

<div>
  <i className="uil uil-browser qualification__card-icon"></i>
   <h3 className="qualification__card-title">ui <br/> Developer</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(3)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 3 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">ui Developer</h3>

<p className="qualification__card-modal-description">Crafting dynamic applications and delivering effective solutions.
</p>

<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
I design intuitive, engaging web pages.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">I optimize your brand’s online impact.
</p>
</li>
</ul>
</div>
 </div>

                       </div> 

                       </div>

                    </div> 

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__sections-container sections-container grid">

                <div className="qualification__card-content">

<div>
  <i className="uil uil-browser qualification__card-icon"></i>
<h3 className="qualification__card-title">Web <br/> Developer</h3>
</div>

<span className="qualification__card-button" onClick={()=>{toggleCardTab(1)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


<div className={toggleCard === 1 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Web Developer</h3>

<p className="qualification__card-modal-description">Crafting dynamic applications and delivering effective solutions.
</p>

<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
I design intuitive, engaging web pages.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">I optimize your brand’s online impact.
</p>
</li>
</ul>
</div>
</div>

                   </div> 

                   <div className="qualification__card-content">

<div>
  <i className="uil uil-browser qualification__card-icon"></i>
   <h3 className="qualification__card-title">app <br/> Developer</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(2)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 2 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">app Developer</h3>

<p className="qualification__card-modal-description">Crafting dynamic applications and delivering effective solutions.
</p>

<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
I design intuitive, engaging web pages.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">I optimize your brand’s online impact.
</p>
</li>
</ul>
</div>
 </div>

                       </div>

                     


                </div>
                    
                </div> 
            </div>
        </div>
   </section>
  )
}

export default Qualification
