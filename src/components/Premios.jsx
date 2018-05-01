import React from 'react'
//import ruleta from '../img/wheel.png'
import './index.css';

const Premios = (props) => (

    <div>
        <p align="center">
            <button onClick={props.shopPremio.bind(this, props.indice)} className="btn btn-info btn-lg btn-block">{props.data.premio} - $ {props.data.precio}</button>
        </p>
    </div>

)

export default Premios