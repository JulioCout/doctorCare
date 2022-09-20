import { useState } from 'react'
import './styles/global.scss'
import './style.scss'

/* Components */
import NavBar from './components/NavBar'
import StatsInfo from './components/StatsInfo'
import ServicesCard from './components/ServicesCard'
import WppButton from './components/WppButton'

/* Images */
import womanPic from "./assets/images/womanPic.png"
import wppIcon from "./assets/images/whatsapp.svg"
import aboutPic from "./assets/images/aboutPic.jpg"
import contactPic from "./assets/images/contactPic.jpg"

import cards from "./serviceCardsData.json"

/* HTML */
function App() {
  
  return (
    <div className="App">

      <NavBar></NavBar>

      <header>

        <div className="headerText">

          <h3>BOAS-VINDAS A DOCTORCARE 👋</h3>
          <h4>Assistência médica simplificada para todos</h4>
          <p>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>

          <WppButton />

        </div>

        <img id="womanPic" src={womanPic} alt="" />

      </header>
      
      <StatsInfo></StatsInfo>

      <div className="services">
        <h3>Serviços</h3>
        <h4>Como podemos ajudá-lo a se sentir melhor?</h4>
        <div className="servicesCards">
          {cards.map(card => (
            <ServicesCard 
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>

      <div className="aboutUs">

        <div className="aboutText">
          <h3>Sobre nós</h3>
          <h4>Entenda quem somos e por que existimos</h4>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>

        <img src={aboutPic} alt="" />

      </div>

      <div className="contactUs">

        <h4>Entre em contato com a gente!</h4>

        <div className="contactInfoWrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>R. Amauri Souza, 346</p>
        </div>

        <div className="contactInfoWrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>contato@doctorcare.com</p>
        </div>

        <WppButton />

        <img src={contactPic} alt="" />

      </div>

      <footer>

        <h2>Doctor<span>Care</span></h2>

        <p>©2021 Beautysalon.</p>

        <p>Todos os direitos reservados.</p>

        <div className="social">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.49997H17.51" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 14.7348 5.99997 15 5.99997H18V1.99997Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>

      </footer>
      

    </div>
  )
}

export default App
