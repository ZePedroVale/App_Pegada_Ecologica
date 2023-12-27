import React, { useState } from "react";
import axios from 'axios';
import * as ac from '../sytles/acao';
import FacebookLogo from '../assets/facebook.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';

const Acao = () =>  {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [desafio, setDesafio] = useState("");
  const [porque, setPorque] = useState("");
  const [como, setComo] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [data_inicio, setDataInicio] = useState("");
  const [data_fim, setDataFim] = useState("");
  const [aceita_termos, setAceitaTermos] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = {
      nome,
      email,
      desafio,
      porque,
      como,
      localizacao,
      data_inicio,
      data_fim,
      aceita_termos
    };
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/form/', form);
      
      if (response.status === 200) {
        alert("Ação submetida com sucesso!");
      }
    } catch (error) {
      console.error("Houve um erro ao submeter a ação!", error);
    }
  };
  
  return(
    <div>
      <div style={ac.barraHorizontal}>
        <h1 style={ac.tituloBarra}> Adicione uma Ação </h1>
      </div>

      <div style={ac.tituloContainer}>
        <h1> Sugira-nos uma ação!</h1>
      </div>

      <div style={ac.formWrapper}>
        <div style={ac.formContainer}>
          <form onSubmit={handleSubmit}>
  <div style={ac.formGroup}>
    <label htmlFor="name">Nome</label>
    <input
      type="text"
      id="name"
      name="name"
      value={nome}
      onChange={event => setNome(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={email}
      onChange={event => setEmail(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="desafio">Qual é o nome do desafio?</label>
    <input
      type="text"
      id="desafio"
      name="desafio"
      value={desafio}
      onChange={event => setDesafio(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="porque">Porque é que as pessoas o devem fazer?</label>
    <input
      type="text"
      id="porque"
      name="porque"
      value={porque}
      onChange={event => setPorque(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="como">Como o devem fazer as pessoas?</label>
    <input
      type="text"
      id="como"
      name="como"
      value={como}
      onChange={event => setComo(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="localizacao">Qual é a localização do desafio?</label>
    <input
      type="text"
      id="localizacao"
      name="localizacao"
      value={localizacao}
      onChange={event => setLocalizacao(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="inicio">Data de início</label>
    <input
      type="text"
      id="inicio"
      name="inicio"
      value={data_inicio}
      onChange={event => setDataInicio(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="fim">Data de fim</label>
    <input
      type="text"
      id="fim"
      name="fim"
      value={data_fim}
      onChange={event => setDataFim(event.target.value)}
      style={ac.formInput}
    />
  </div>
  
  <div style={ac.formGroup}>
    <label htmlFor="confirm">
      <input
        type="checkbox"
        id="confirm"
        name="confirm"
        checked={aceita_termos}
        onChange={event => setAceitaTermos(event.target.checked)}
        style={ac.formInput}
      />
      Eu aceito os termos e condições
    </label>
  </div>
  
  <button type="submit" style={ac.formButton}>Confirmar</button>
          </form>
        </div>
      </div>        
      <footer style={ac.footer}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookLogo} alt="Facebook Logo" style={{width: "32px", height: "32px"}} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={TwitterLogo} alt="Twitter Logo" style={{width: "32px", height: "32px"}} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramLogo} alt="Instagram Logo" style={{width: "32px", height: "32px"}} />
        </a>
      </footer>
    </div>
  );
};
  
export default Acao;