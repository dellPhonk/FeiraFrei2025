import { useState } from "react";
import logofrei from '../assets/logofrei.png';
import BotaoInscreva from '../assets/bt_01.png';
import ImagemSec from '../assets/IMG_4941.png';
import Rectangle from '../assets/Rectangle.png';
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

        <div className="tituloPrincipal"> 
            <h1>5° FEIRA</h1>
            <h2>DAS PROFISSÕES</h2>
            <p>“Esforço que  transforma,<br /> e o orgulho permanece”</p>
        </div>

        <div className="botaoInscreva">
        <a href="" target="_blank" rel="noreferrer">
          <img className="inscrevaIMG" src={BotaoInscreva} alt="Inscreva-se" />
        </a>
      </div>
      <section class="event-info">
    <div>
      <h3>INICIO:</h3>
      <p>09:00 DA MANHÃ</p>
    </div>
    <div class="date">
      <span>📅 29/09</span>
    </div>
    <div>
      <h3>TERMINO:</h3>
      <p>14:00 DA TARDE</p>
    </div>
  </section>
  <section className="comoFunciona">
    <div className="texto02">
      <h4>COMO FUNCIONA A <br />
      FEIRA DAS PROFISSÕES?</h4>
      <p>Você pode convidar qualquer <br /> amigo ou familiar para visitar <br /> nossa escola e aproveitar <br /> diversas atividades especiais.</p>
      </div>
      <div>
      <img className="ComoFuncIMG" src={ImagemSec} alt="COMO FUNCIONA_IMG" />
      </div>
  </section>
  <section className="Programacao">
    <h1>
      Programação
    </h1>
    <div className="patio">
    <img className="Rectangle" src={Rectangle} alt="obejeto-01" />
      <div className="lista01">
      <h2>Patio</h2>
      <h3>Estandes de empresas convidadas:</h3>
      <ul>
        <li>Casa da Mulher Paulistana</li>
        <li>Conexão Bem Maior</li>
        <li>Óticas Carol</li>
        <li>STB
        </li>
      </ul>
      </div>
    </div>
  </section>
  </div>
    )
}