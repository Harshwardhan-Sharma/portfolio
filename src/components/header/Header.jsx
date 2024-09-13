import React, { useState , useEffect } from 'react'
import './header.css'

const Header = () => {

    window.addEventListener('scroll', function(){
        const header = document.querySelector('.header')
        if(this.scrollY >= 80) header.classList.add('scroll-header')
        else header.classList.remove('scroll-header')
       }) 

    const [Toggle, showMenu] =useState(false);
    const [activeNav, setActiveNav] =useState(window.location.hash || '#home');


    // scroll-based active section detection using IntersectionObserver
    useEffect(() => {
        // Function to set threshold based on screen size
        const getThreshold = () => {
          if (window.innerWidth > 1024) {
            // For large screens (e.g., desktops), use a lower threshold for earlier detection
            return 0.3; // 30% of section is visible
          } else if (window.innerWidth > 768) {
            // For medium screens (e.g., tablets)
            return 0.15;
          } else {
            // For small screens (e.g., mobile phones), use a higher threshold
            return 0.1;
          }
        };
      
        const sections = document.querySelectorAll('section');
      
        const observerOptions = {
          threshold: getThreshold(), // Dynamic threshold based on screen size
        };
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = `#${entry.target.id}`;
              setActiveNav(sectionId);
              window.history.replaceState(null, null, sectionId); // Updates the URL without reloading
            }
          });
        }, observerOptions);
      
        sections.forEach((section) => observer.observe(section));
      
        // Handle URL hash change (when user directly navigates to a section)
        const handleHashChange = () => {
          const currentHash = window.location.hash || '#home';
          setActiveNav(currentHash);
        };
        window.addEventListener('hashchange', handleHashChange);
      
        // Reinitialize observer when screen is resized
        const handleResize = () => {
          sections.forEach((section) => observer.unobserve(section)); // Clean up current observers
          observer.disconnect(); // Disconnect the old observer
      
          // Recreate observer with updated threshold based on new screen size
          const newObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const sectionId = `#${entry.target.id}`;
                setActiveNav(sectionId);
                window.history.replaceState(null, null, sectionId); // Updates the URL without reloading
              }
            });
          }, { threshold: getThreshold() });
      
          sections.forEach((section) => newObserver.observe(section));
        };
      
        window.addEventListener('resize', handleResize);
      
        // Cleanup observers and event listeners on unmount
        return () => {
          sections.forEach((section) => observer.unobserve(section));
          window.removeEventListener('hashchange', handleHashChange);
          window.removeEventListener('resize', handleResize);
        };
      }, []);


  return (
    <header className="header">
        <nav className="nav container">
            <a href="#home" className="nav__logo">Portfolio</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" 
                        onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-estate nav__icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-user nav__icon"></i>
                            About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills"  onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-file-alt nav__icon"></i>
                            Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={()=>(showMenu(!Toggle))}></i>
            </div>

            <div className="nav__toggle" onClick={()=>(showMenu(!Toggle))}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
