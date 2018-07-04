import React from 'react'
import ruleta from '../img/wheel.png'
import './index.css';

const Ruleta = (props) => (

    <div>
        <h1 align="center" className="ruleta-puntos">Puntos: {props.total_points}</h1>
        <p align="center">
            <img
                id="img-ruleta"
                src={ruleta}
                style={{ transform: 'rotate(' + props.data_ruleta + 'deg)', WebkitTransform: 'rotate(' + props.data_ruleta + 'deg)' }}
                alt="Ruleta"
                onTransitionEnd={props.showRuletaResult}
                className="img-responsive img-ruleta"
                ref={props.ruleta}
            />
        </p>
        <p align="center">
            <button id="btnAnimar" disabled={props.animatedRuleta} onClick={props.animarEvent} className="btn btn-warning btn-orange btn-lg">GIRA LA RULETA</button>
        </p>
    </div>

)

export default Ruleta