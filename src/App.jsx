import React from 'react'
import Home from './pages/Home'
import GlobalPresence from './components/GlobalPresence'
import Clients from "./components/Clients"
import OurStory from "./components/OurStory"
import Journey from "./components/Journey"
import Services from "./components/Services"
import TechFocus from "./components/TechFocus"
import Leadership from "./components/Leadership"
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full h-screen '>
      <Home/>
      <GlobalPresence/>
      <Clients/>
      <OurStory/>
      <Journey/>
      <Services/>
      <TechFocus/>
      <Leadership/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
