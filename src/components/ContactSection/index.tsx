import "./style.scss"

import contactPic from "../../assets/images/contactPic.jpg"

import WppButton from "../WppButton"

export default function ContactSection() {
    return(
        <div className="contactSection-body">

          <div className="text-wrapper">
            
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

          </div>


        <img src={contactPic} alt="" />

      </div>
    )
}