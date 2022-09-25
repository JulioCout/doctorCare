import React from "react";
import "./style.scss"

interface props {
    title: string;
    text: string;
}

export default function ServicesCard({title, text}:props){

    return(
        <div className="servicesCard-body">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
            <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <h2>{ title }</h2>
            <p>{ text }</p>
        </div>
    )
}