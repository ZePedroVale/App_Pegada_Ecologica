import React, { useState } from "react";
import * as doa from '../sytles/doar.js';
import FacebookLogo from '../assets/facebook.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';



// Import Material-UI icons
import MBWayIcon from '../assets/mbway.jpg';
import MultibancoIcon from '../assets/multibanco.jpg';
import VisaIcon from '../assets/visa.jpg';

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;  // Change this to your preferred color
  color: white;
  font-size: 1em;
  cursor: pointer;
  font-family: 'Montserrat';
  &:hover {
    background-color: #45a049; // Change this to your preferred hover color
  }
`;

const CustomAmountInput = styled.input`
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Montserrat';
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  height: 100vh; /* Adjust the height as per your requirement */
  font-family: 'Montserrat';
`;



const Doar = () =>  {
  
  const [montante, setMontante] = useState(0.0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aquem, setAquem] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [emailError, setEmailError] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  
    // Verifica se o e-mail inserido é válido
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
  
    if (!emailValid) {
      setEmailError('Por favor, insira um e-mail válido.');
    } else {
      setEmailError('');
    }
  };
  

  const handleButtonClick = (value) => {
    setMontante(parseFloat(value));
  };
  
  const handleCustomAmountChange = (event) => {
    setMontante(parseFloat(event.target.value));
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  
  const handleAquemChange = (event) => {
    setAquem(event.target.value);
  };

  const handleMetodoPagamentoChange = (event) => {
    setMetodoPagamento(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

  if (emailError) {
    const alertContainer = document.createElement('div');
    // Configure o alertContainer aqui...

    const alertMessage = document.createElement('p');
    alertMessage.textContent = emailError;
    alertContainer.appendChild(alertMessage);

    // Configure o closeButton aqui...

    document.body.appendChild(alertContainer);
  } else {
    const doacao = {
      montante,
      nome,
      email,
      aquem,
      metodoPagamento
    };
    try {
      const response = await axios.post('http://127.0.0.1:8000/doacao/', JSON.stringify(doacao), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
    alertMessage.textContent = `Será contactado via email por parte da instituição que pretende ajudar para efetuar a doação que deseja. Obrigado!`;
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
      
    } catch (error) {
      console.error("Houve um erro ao submeter a doação!", error);
    }}
  };


 
  return (
    <div>
      <div style={doa.barraHorizontal}>
        <h1 style={doa.tituloBarra}>Doar</h1>
      </div>
      
      

      <CenteredContainer>
        <h2>Escolha a Quantia</h2>

        <ButtonContainer>
          <Button onClick={() => handleButtonClick(5)}>5 Euros</Button>
          <Button onClick={() => handleButtonClick(10)}>10 Euros</Button>
          <Button onClick={() => handleButtonClick(20)}>20 Euros</Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button onClick={() => handleButtonClick(25)}>25 Euros</Button>
          <Button onClick={() => handleButtonClick(30)}>30 Euros</Button>
          <Button onClick={() => handleButtonClick(35)}>35 Euros</Button>
        </ButtonContainer>

        <h2>Montante Personalizado</h2>
        <CustomAmountInput
          type="number"
          value={montante}
          onChange={handleCustomAmountChange}
          placeholder="€ Montante Personalizado"
        />

        <TextField
          label="Nome"
          value={nome}
          onChange={handleNomeChange}
          fullWidth
          style={{ padding: '8px', width: '300px' }}
        />

        <TextField
           error={emailError ? true : false}
            helperText={emailError}
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            style={{ padding: '8px', width: '300px' }}
        />

        <FormControl fullWidth style={doa.basicslect}>
          <InputLabel id="demo-simple-select-label">A quem doar?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={aquem}
            label="Instituicao"
            onChange={handleAquemChange}
          >
            <MenuItem value="">Selecionar Instituição</MenuItem>
            <MenuItem value="Quercus">Quercus</MenuItem>
            <MenuItem value="Fapas">Fapas</MenuItem>
            <MenuItem value="Liga para a Protecção da Natureza">Liga para a Protecção da Natureza</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={doa.basicslect}>
          <InputLabel id="metodo-pagamento-label">Método de Pagamento</InputLabel>
          <Select
            labelId="metodo-pagamento-label"
            id="metodo-pagamento"
            value={metodoPagamento}
            label="Método de Pagamento"
            onChange={handleMetodoPagamentoChange}
          >
            <MenuItem value="mbway">
              <img src={MBWayIcon} alt="MBWay Icon" style={{ width: "30px", height: "20px", marginRight: "8px" }} />
              MBWay
            </MenuItem>
            <MenuItem value="multibanco">
              <img src={MultibancoIcon} alt="Multibanco Icon" style={{ width: "18px", height: "20px", marginRight: "8px" }} />
              Multibanco
            </MenuItem>
            <MenuItem value="visa">
              <img src={VisaIcon} alt="Visa Icon" style={{ width: "25px", height: "20px", marginRight: "8px" }} />
              Visa
            </MenuItem>
          </Select>
        </FormControl>

        <Button onClick={handleSubmit} >Doar </Button>
      </CenteredContainer>

      <footer style={doa.footer}>
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
  );
};

export default Doar;