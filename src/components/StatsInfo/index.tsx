import React from "react"
import "./style.scss"

export default function StatsInfo() {
    return(
        <div className="statsInfo-body">

            <div className="text-wrapper">
                <h2>+3.500</h2>
                <p>Pacientes Atendidos</p>
            </div>

            <div className="text-wrapper">
                <h2>+15</h2>
                <p>Especilistas Disponíveis</p>
            </div>

            <div className="text-wrapper">
                <h2>+10</h2>
                <p>Anos no mercado</p>
            </div>

        </div>
    )
}