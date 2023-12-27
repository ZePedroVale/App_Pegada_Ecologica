import React, { useState } from "react";
import imagem6 from '../assets/imagem6.jpg';
import * as calc from '../sytles/calculadora';
import FacebookLogo from '../assets/facebook.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';
import { useNavigate } from "react-router-dom";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Estilização do Material UI
const useStyles = makeStyles({
  formControl: {
    margin: "15px 0",
    minWidth: 120,
    color: "white"
  },
  selectEmpty: {
    marginTop: "15px",
    color: "white"
  },
});

// Formulário de Pegada Ecológica
function FormPegadaEcologica() {
  const classes = useStyles();
  const [dieta, setDieta] = useState("");
  const [transporte, setTransporte] = useState("");
  const [energia, setEnergia] = useState("");
  const [reciclagem, setReciclagem] = useState("");
  const [alimentos, setAlimentos] = useState("");
  const [casa, setCasa] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    let score = 0;
  
    // Add points based on the answers
    if (dieta === 'vegan') score += 5;
    else if (dieta === 'vegetarian') score += 3;
    else if (dieta === 'omnivore') score += 1;
  
    if (transporte === 'car') score += 1;
    else if (transporte === 'public') score += 3;
    else if (transporte === 'bike') score += 5;
    else if (transporte === 'walk') score += 4;
  
    if (energia === 'renewable') score += 5;
    else if (energia === 'nonrenewable') score += 1;
  
    if (reciclagem === 'yes') score += 5;
    else if (reciclagem === 'no') score += 1;

    if (alimentos === 'zero') score += 5;
    else if (alimentos === 'metade') score += 3;
    else if (alimentos === 'tudo') score += 1;

    if (casa === 'Palha') score += 5;
    else if (casa === 'Tijolo') score += 3;
    else if (casa === 'Aço') score += 2;
    else if (casa === 'Madeira') score += 1;
  
  
    // Create a styled alert
    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '50%';
    alertContainer.style.left = '50%';
    alertContainer.style.transform = 'translate(-50%, -50%)';
    alertContainer.style.backgroundColor = '#f0f0f0';
    alertContainer.style.border = '1px solid #ccc';
    alertContainer.style.borderRadius = '4px';
    alertContainer.style.padding = '16px';
    alertContainer.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    alertContainer.style.zIndex = '9999';
  
    const alertMessage = document.createElement('p');
    alertMessage.textContent = `Sua pegada ecológica é: ${score}`;
    alertContainer.appendChild(alertMessage);
  
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.marginTop = '12px';
    closeButton.style.padding = '8px 16px';
    closeButton.style.backgroundColor = '#67cb57';
    closeButton.style.border = 'none';
    closeButton.style.color = '#fff';
    closeButton.style.borderRadius = '4px';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
      alertContainer.remove();
    });
    alertContainer.appendChild(closeButton);
  
    document.body.appendChild(alertContainer);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="dieta-label" style={{color: "white"}}>Qual é a sua dieta principal?</InputLabel>
        <Select
          labelId="dieta-label"
          value={dieta}
          onChange={(e) => setDieta(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value=""><em>Nenhum</em></MenuItem>
          <MenuItem value="vegan">Vegan</MenuItem>
          <MenuItem value="vegetarian">Vegetarian</MenuItem>
          <MenuItem value="omnivore">Omnivore</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="transporte-label" style={{color: "white"}}>Qual é o seu principal meio de transporte?</InputLabel>
        <Select
          labelId="transporte-label"
          value={transporte}
          onChange={(e) => setTransporte(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value=""><em>Nenhum</em></MenuItem>
          <MenuItem value="car">Carro</MenuItem>
          <MenuItem value="public">Transporte público</MenuItem>
          <MenuItem value="bike">Bicicleta</MenuItem>
          <MenuItem value="walk">A pé</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="energia-label" style={{color: "white"}}>Qual tipo de energia você usa em casa?</InputLabel>
        <Select
          labelId="energia-label"
          value={energia}
          onChange={(e) => setEnergia(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value=""><em>Nenhum</em></MenuItem>
          <MenuItem value="renewable">Energia Renovável</MenuItem>
          <MenuItem value="nonrenewable">Energia Não Renovável</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="reciclagem-label" style={{color: "white"}}>Você pratica a reciclagem?</InputLabel>
        <Select
          labelId="reciclagem-label"
          value={reciclagem}
          onChange={(e) => setReciclagem(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value=""><em>Nenhum</em></MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
          <MenuItem value="no">Não</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="alimentos-label" style={{color: "white"}}>Dos alimentos que consomes, qual a percentagem de comida não processada?</InputLabel>
        <Select
          labelId="alimentos-label"
          value={alimentos}
          onChange={(e) => setAlimentos(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value="zero">0%</MenuItem>
          <MenuItem value="metade">50%</MenuItem>
          <MenuItem value="tudo">100%</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="casa-label" style={{color: "white"}}>Qual é o material de construção da tua casa?</InputLabel>
        <Select
          labelId="casa-label"
          value={casa}
          onChange={(e) => setCasa(e.target.value)}
          className={classes.selectEmpty}
        >
          <MenuItem value="Palha">Palha</MenuItem>
          <MenuItem value="Tijolo">Tijolo</MenuItem>
          <MenuItem value="Aço">Aço</MenuItem>
          <MenuItem value="Madeira">Madeira</MenuItem>
        </Select>
      </FormControl>


      <Button variant="contained" color="#67cb57" type="submit" style={{ marginTop: "70px" }} >
        Calcular Pegada Ecológica
      </Button>
    </form>
  );
}

function Calculadora() {
  const navigate = useNavigate();

  const handleIniciarClick = () => {
    navigate("/calculopegada");
  };

  return (
    <div>
      <div style={calc.barraHorizontal}>
        <h1 style={calc.tituloBarra}>Calculadora de Pegada Ecológica</h1>
      </div>
      <div style={calc.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          
          <div style={{ position: "relative", width: "100%", height: "100%", top:"5%"}}>
            <img
              src="https://www.cm-guimaraes.pt/cmguimaraes/uploads/news/image/3309/Pegada_Ecologica.png"
              alt="Imagem da Natureza"
              style={{ width: "60%", height: "90%" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <h1>Seja bem-vindo à Calculadora de Pegada Ecológica!</h1>
              <p>Estamos felizes em ajudá-lo a entender e reduzir sua pegada ecológica.</p>
              
              <FormPegadaEcologica />

            </div>
          </div>
        </div>

        <footer style={calc.footer}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="Facebook Logo" style={{ width: "32px", height: "32px" }} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterLogo} alt="Twitter Logo" style={{ width: "32px", height: "32px" }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram Logo" style={{ width: "32px", height: "32px" }} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Calculadora;
