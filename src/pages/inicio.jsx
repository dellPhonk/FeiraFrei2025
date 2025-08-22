import { useState } from "react";
import logofrei from '../assets/logofrei.png';
import { Link } from "react-router";
import './inicio.scss'
import '../styles/global.scss'

export default function Inicio() {
    return(
        <div className="container-inicio">
           <nav> <img className="logoland" src={logofrei} alt="logofrei" />
           <p className="text-logo">INSTITUTO SOCIAL NOSSA SENHORA DE <br /> FÁTIMA</p>
            <div className="Batoes">
            <Link to={"/"} className="Batao">Login Admin</Link>
            <Link to={"/"} className="Batao">Conheça o Site Do Frei</Link>
            </div>
            </nav>
        </div>
    )
}