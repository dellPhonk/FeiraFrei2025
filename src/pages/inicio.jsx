import { useState } from "react";
import logofrei from '../assets/logofrei.jpg';
import { Link } from "react-router";
import './inicio.scss'

export default function Inicio() {
    return(
        <div className="container-inicio">
           <nav> <img src={logofrei} alt="logofrei" />
            <Link to={"/"}>Inicio</Link>
            <Link to={"/sobre"}>Sobre</Link>
            </nav>
        </div>
    )
}