import React from "react"

import WppButton from "../WppButton"

import customerPic from "../../assets/images/womanPic.png"

import "./style.scss"

export default function HeaderSection(){
    return(
        <div className="headerSection-body">

        <div className="headerText">

          <h3>BOAS-VINDAS A DOCTORCARE 👋</h3>
          <h4>Assistência médica simplificada para todos</h4>
          <p>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>

          <WppButton />

        </div>

        <img id="customerPic" src={customerPic} alt="" />

      </div>
    )
}