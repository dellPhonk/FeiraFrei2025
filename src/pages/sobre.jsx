import { useState } from "react";
import { Link } from "react-router";
import Losangolo from '../assets/LosangoloLaranja.png';
import './sobre.scss'

export default function Sobre() {
    return(
      <div className="cabecalho">
        <h1>Sobre o Instituto</h1>

        <h2>Sejam bem-vindos
        ESCOLA do FREI</h2>

        <p>O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é uma instituição dedicada à formação de jovens de baixa renda,
           oferecendo oportunidades de educação e qualificação profissional. Com um compromisso firme de inclusão social, o instituto oferece vários cursos, 
           capacitando seus alunos para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por seu impacto transformador na vida de jovens,
           promovendo não apenas conhecimento técnico, mas também habilidades comportamentais, sociais e tecnológicas essenciais para o sucesso profissional.</p>

        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1VULJZT0jSI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        
        <img src={Losangolo} alt="Losangolo" /> 

      </div>
 )
}

