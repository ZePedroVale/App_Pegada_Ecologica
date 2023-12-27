import React from "react";
import imagem6 from '../assets/imagem6.jpg';
import * as calc from '../sytles/calculadora';
import FacebookLogo from '../assets/facebook.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';
import { useNavigate } from "react-router-dom";

function calculopegada() {
  const navigate = useNavigate();

  const handleIniciarClick = () => {
    navigate("/Perguntas");
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
          <div style={{ position: "relative", width: "700px", height: "500px" }}>
            <img
              src="https://www.cm-guimaraes.pt/cmguimaraes/uploads/news/image/3309/Pegada_Ecologica.png"
              alt="Imagem da Natureza"
              style={{ width: "100%", height: "100%" }}
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
              <button
                style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", fontFamily: "Montserrat, sans-serif" }}
                onClick={handleIniciarClick}
              >
                Iniciar

              </button>
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

export default calculopegada;
