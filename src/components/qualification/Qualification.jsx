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
      <i className="uil uil-graduation-cap qualification__card-icon"></i>
   <h3 className="qualification__card-title">Academic <br/> Odyssey</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(1)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 1 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Govt. Engineering College Bikaner</h3>

<p className="qualification__card-modal-description"> 
  <i className='uil uil-calendar-alt'/> {"  "} 2022 - Present
</p>


<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">CGPA : 8.8
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
Majoring in Computer Science, specializing in programming, software development, and technological innovation.
</p>
</li>
</ul>
</div>
 </div>

                       </div>  

                       <div className="qualification__card-content">

<div>
  <i className="uil uil-android-alt qualification__card-icon"></i>
   <h3 className="qualification__card-title">Android <br/> Maven</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(2)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 2 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Android Development Certification</h3>


<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
Completed an advanced course on Android development through Udemy, gaining expertise in building dynamic and efficient mobile applications.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Demonstrated skills in Java/Kotlin, UI/UX design, and app architecture, with a focus on creating innovative solutions and enhancing user experiences.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Credentials :{" "} <a href='https://udemy-certificate.s3.amazonaws.com/image/UC-64f5298b-b7b7-4d5f-ab0d-66a830acfe5e.jpg?v=1693042067000' style={{color:'var(--title-color-dark)'}}>{" "}View My Certificate</a>
</p>
</li>
</ul>
</div>
 </div>

                       </div> 

                       <div className="qualification__card-content">

<div>
  <i className="uil uil-notebooks qualification__card-icon"></i>
   <h3 className="qualification__card-title">Software <br/> Maestro</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(3)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 3 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Advanced Software Engineering Virtual
Experience Program</h3>


<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
Completed an advanced certification in Software Engineering through Walmart, focusing on cutting-edge techniques and methodologies.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">The course covered a comprehensive range of topics, including: Software Architecture, Advanced Data Structures, Data Munging, and Relational Database Design.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Credentials :{" "} <a href='https://github.com/Harshwardhan-Sharma/WALMART-CERTIFICATE/blob/main/oX6f9BbCL9kJDJzfg_Walmart%20USA_QQ2mRZYJpcj6Eca77_1687757106873_completion_certificate.pdf' style={{color:'var(--title-color-dark)'}}>{" "}View My Certificate</a>
</p>
</li>
</ul>
</div>
 </div>

                       </div> 

                       <div className="qualification__card-content">

<div>
  <i className="uil uil-book-open qualification__card-icon"></i>
   <h3 className="qualification__card-title">Tech <br/> Triumph</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(4)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 4 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Deloitte Technology Experience Certified</h3>


<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
This comprehensive program provided an immersive experience in the dynamic field of technology.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info"> Covering a broad range of critical areas:coding, data analysis, software development, cybersecurity, and forensic technology.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Credentials :{" "} <a href='https://github.com/Harshwardhan-Sharma/DELOITTE-CERTIFICATE/blob/main/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_QQ2mRZYJpcj6Eca77_1688016435428_completion_certificate.pdf' style={{color:'var(--title-color-dark)'}}>{" "}View My Certificate</a>
</p>
</li>
</ul>
</div>
 </div>

                       </div> 

                       <div className="qualification__card-content">

<div>
  <i className="uil uil-database-alt qualification__card-icon"></i>
   <h3 className="qualification__card-title">Data <br/> Analytics</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(5)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 5 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Advanced Data Analytics by Quantium</h3>


<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
This course covered data preparation, customer analytics, experimentation, advanced testing. 
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
  And commercial applications, providing essential skills for comprehensive data analysis and practical business use.
</p>
</li>


<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Credentials :{" "} <a href='https://github.com/Harshwardhan-Sharma/QUANTIUM-CERTIFICATE/blob/main/NkaC7knWtjSbi6aYv_Quantium_QQ2mRZYJpcj6Eca77_1688017180053_completion_certificate.pdf' style={{color:'var(--title-color-dark)'}}>{" "}View My Certificate</a>
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
  <i className="uil uil-android qualification__card-icon"></i>
<h3 className="qualification__card-title">Android <br/> Intern</h3>
</div>

<span className="qualification__card-button" onClick={()=>{toggleCardTab(1)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


<div className={toggleCard === 1 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">The Sparks Foundation</h3>

<p className="qualification__card-modal-description">Android Developer Internship
</p>

<ul className="qualification__card-modal-services grid">
<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
Integrated Paytm gateway, ensuring compatibility across browsers and devices with a page load time under 2 seconds.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Integrated payment methods (credit/debit cards, net banking, UPI) and resolved issues with Paytm support.
</p>
</li>
</ul>
</div>
</div>

                   </div> 

                   <div className="qualification__card-content">

<div>
  <i className="uil uil-chat-bubble-user qualification__card-icon"></i>
   <h3 className="qualification__card-title">Freelance <br/> Nexus</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(2)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 2 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Freelancer</h3>


<ul className="qualification__card-modal-services grid">

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">As a dedicated freelancer, I specialize in delivering high-quality solutions across various domains, focusing on skill development and industry trends.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">
My approach combines technical proficiency with a keen understanding of market dynamics to deliver impactful results efficiently and effectively.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">I provide tailored services that meet client needs and drive project success.
</p>
</li>
</ul>
</div>
 </div>

                    </div>

                    <div className="qualification__card-content">

<div>
  <i className="uil uil-brackets-curly qualification__card-icon"></i>
   <h3 className="qualification__card-title">Coding <br/> Proficiency</h3>
  </div>

  <span className="qualification__card-button" onClick={()=>{toggleCardTab(3)}}>View More <i className="uil uil-arrow-right qualification__card-button-icon"></i></span>


  <div className={toggleCard === 3 ? "qualification__card-modal active-modal" : "qualification__card-modal"}>
<div className="qualification__card-modal-content">

<i onClick={()=>{toggleCardTab(0)}} className="uil uil-times qualification__card-modal-close"></i>

<h3 className="qualification__card-modal-title">Algorithmic Problem Solving</h3>


<ul className="qualification__card-modal-services grid">

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Solved 350+ GeeksforGeeks problems, showcasing strong algorithmic and data structure skills.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Competed in various coding contests to refine skills and stay updated with new techniques.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">Competitive programming has sharpened my analytical skills and programming expertise for complex challenges.
</p>
</li>

<li className="qualification__card-modal-service">
<i className="uil uil-check-circle qualification__card-modal-icon"></i>
<p className="qualification__card-modal-info">View : <a href='https://www.geeksforgeeks.org/user/harshwardgzxp/' style={{color: 'var(--title-color-dark)'}}>View My Profile</a>
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
