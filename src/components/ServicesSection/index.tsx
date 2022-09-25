import "./style.scss"

import cards from "../../serviceCardsData.json"

import ServicesCard from "../ServicesCard"

export default function ServicesSection() {
    return(
        <div className="servicesSection-body">

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
    )
}