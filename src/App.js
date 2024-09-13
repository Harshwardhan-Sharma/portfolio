import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
   <ChakraProvider >
     <Header/>

    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Work/>
    <Contact/>
    <Toaster position='top-center'/>
    </main>

    <Footer/>
    <ScrollUp/>
   </ChakraProvider>
  )
}

export default App
