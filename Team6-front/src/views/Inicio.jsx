import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as inic from '../sytles/inicio';
import FacebookLogo from '../assets/facebook.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';
import axios from 'axios';
import styled from 'styled-components';


import imageLateral from '../assets/1.png';
import imageLateral2 from '../assets/2.jpg';
import imagemHorizontal from '../assets/3.jpg';


import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import floresta from '../assets/floresta.png';



function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const subject = 'Form Submission';
  const body = `Name: ${name}\nEmail: ${email}`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}


function Inicio() {
  const images = [
    imageLateral,
    imageLateral2,
    imagemHorizontal,
  ];

  const staticImages = [
    { url: 'https://www.climateactionnow.com/wp-content/uploads/2021/02/inner-you.jpg', title: 'Agir', text: 'Tornamos mais fácil para você tomar as ações certas para ajudar a evitar o colapso climático.' },
    { url: 'https://ec.europa.eu/eurostat/documents/8131531/8610725/shutterstock_Dudarev+Mikhail_32310337.jpg/f9ad99d4-53e6-4645-b5bf-c4b7e32ef9e5?t=1519651210000', title: 'Partilhar', text: 'Compartilhe seu progresso na conclusão dos desafios climáticos e na redução de sua pegada de carbono pessoal enquanto faz parte de uma comunidade consciente que luta contra a crise climática.' },
    { url: 'https://www.climateactionnow.com/wp-content/uploads/2021/03/climate-poser.jpg', title: 'Inspirar', text: 'Inspire um movimento global de ação com cada desafio concluído no aplicativo. Juntos, vamos fazer a mudança acontecer!' },
  ];

  const View = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: 'Montserrat';
  `;

  const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    font-family: 'Montserrat';
  `;

  const CarouselImage = styled.img`
    height: 700px; /* Adjust the height to your desired value */
  `;

  return (
    <div style={inic.carouselContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <CarouselImage src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <div style={inic.staticImagesContainer}>
        {staticImages.map((image, index) => (
          <div style={inic.staticImageItem} key={index}>
            <img style={inic.imageStyle} src={image.url} alt={`Static Image ${index + 1}`} />
            <p style={{ ...inic.imageTextStyle, fontWeight: 'bold', color: '#67cb57', fontSize: '25px' }}>{image.title}</p>
            <p style={inic.imageTextStyle}>{image.text}</p>
          </div>
        ))}
      </div>


      <View style={inic.containerImagemLateral}>
      <img src={image1} style={{ ...inic.imagemLateral, marginLeft: 150}} />
      <View style={{...inic.textContainerTextoLateral1, marginLeft: 200}}>
      <Text style={inic.upperText}>
      Faltam apenas 6 anos para o ponto sem retorno.
        </Text>
        <Text style={inic.lowerText}>
        Os governos falharam conosco e os sistemas de suporte à vida estão quebrando.
        </Text>
        <Text style={inic.lowerText1}>
        Um milhão de espécies estão ameaçadas de extinção...
        </Text>
      
      </View>
      
    </View>




    <View style={inic.containerImagemLateral}>
    <View style={{ ...inic.textContainerTextoLateral1, marginLeft: 150}}>
      <Text style={inic.upperText}>
      Mas todos nós temos o poder de impedir isso, e veja como:
        </Text>
        <Text style={inic.lowerText}>
        Estamos lançando um aplicativo que permite que você, 
        </Text>
        <Text style={inic.lowerText1}>
        seus amigos e todos os outros façam as ações climáticas corretas -
        </Text>
        <Text style={inic.lowerText1}>
        tornando-o fácil e divertido ao mesmo tempo!        
        </Text>
      
      </View>
      <img src={image2} style={{...inic.imagemLateral, marginLeft: 230}} />
    </View>
<div>
    <div style={inic.container}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "65vh", textAlign: "center", marginTop: 60}}>
          <img src={floresta} alt="Juntar ao movimento" style={{width: "100%", height: "100%"}} />
          <div style={{position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)", color: "white",fontFamily: 'Montserrat, sans-serif'}}>
            <h1>Junta-te ao Movimento!</h1>
          </div>
        
      </div>
      </div>

      
    
    <div style={inic.formWrapper}>
      <div style={inic.formContainer}>
      <form>
  <div style={inic.formGroup}>
    <label htmlFor="name">Nome</label>
    <input type="text" id="name" name="name" style={inic.formInput} />
  </div>
  <div style={inic.formGroup}>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" style={inic.formInput} />
  </div>
  <button type="submit" style={inic.formButton} onClick={handleFormSubmit}>
    Sign Up
  </button>
</form>
</div>
</div>
      <footer style={inic.footer}>
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
</div>
    
  );
}

export default Inicio;
