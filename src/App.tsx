import { useState } from 'react'
import './styles/global.scss'
import './style.scss'

/* Components */
import NavBar from './components/NavBar'
import StatsInfo from './components/StatsInfo'

/* Images */
import womanPic from "./assets/images/womanPic.png"
import wppIcon from "./assets/images/whatsapp.svg"

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

          <button>
            <img src={wppIcon} alt="" />
            Agende sua consulta
          </button>

        </div>

        <img id="womanPic" src={womanPic} alt="" />

      </header>
      
      <StatsInfo></StatsInfo>

      <div className="services">
        <h3>Serviços</h3>
        <h4>Como podemos ajudá-lo a se sentir melhor?</h4>
        <div className="servicesCards">
          
        </div>
      </div>


    </div>
  )
}

export default App
