import { useState } from 'react'
import './styles/global.scss'
import './style.scss'

/* Components */
import NavBar from './components/NavBar'
import HeaderSection from './components/HeaderSection'
import StatsInfo from './components/StatsInfo'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

/* HTML */
function App() {
  
  return (
    <div className="App">

      <NavBar></NavBar>

      <HeaderSection></HeaderSection>
      
      <StatsInfo></StatsInfo>

      <ServicesSection></ServicesSection>

      <AboutSection></AboutSection>

      <ContactSection></ContactSection>

      <FooterSection></FooterSection>
      
    </div>
  )
}

export default App
