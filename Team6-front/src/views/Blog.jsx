import React, { useState, useEffect } from "react";
import axios from 'axios';
import FacebookLogo from '../assets/facebook.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';
import * as bl from '../sytles/blog';


function Blog() {
  const [noticias, setNoticias] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/noticia/')
      .then((response) => {
        setNoticias(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredNoticias = noticias.filter((noticia) =>
    noticia.nome.toLowerCase().includes(searchQuery.toLowerCase()) && 
    (searchType === "" || noticia.tipo.toLowerCase() === searchType.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === "asc") {
      return a.nome.localeCompare(b.nome);
    } else {
      return b.nome.localeCompare(a.nome);
    }
  });

  const tiposNoticia = [...new Set(noticias.map(noticia => noticia.tipo))];

  return (
    <div>
      <div style={bl.barraHorizontal2}>
        <h1 style={bl.tituloBarra2}> Blog </h1>
      </div>
      <div style={{textAlign:'center'}}>
        <input
            type="text"
            placeholder="Procurar por titulo"
            value={searchQuery}
            onChange={handleSearchChange}
            style={bl.searchBar}
        />
        <select value={searchType} onChange={handleTypeChange} style={bl.searchBar}>
          <option value="">Todos</option>
          {tiposNoticia.map((tipo) => (
            <option value={tipo}>{tipo}</option>
          ))}
        </select>
        <select value={sortOrder} onChange={handleSortChange} style={bl.searchBar}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div style={bl.blogContainer}>
        <div style={bl.blogGrid}>
          {filteredNoticias.map((noticia) => (
  <article style={bl.blogPost} key={noticia._id}>
    <a href={noticia.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img
        src={noticia.foto}
        alt={noticia.nome}
        style={bl.blogPostImage}
      />
      <h2 style={bl.blogPostTitle}>{noticia.nome}</h2>
      <p style={bl.blogPostContent}>{noticia.descricao.substring(0, 100)}...</p>
    </a>
     <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${noticia.link}`, '_blank')} style={bl.buttonStyle}>
      <img src={FacebookLogo} alt="Facebook Logo" style={bl.buttonIconStyle} />
    </button>
    <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${noticia.link}`, '_blank')} style={bl.buttonStyle}>
      <img src={TwitterLogo} alt="Twitter Logo" style={bl.buttonIconStyle} />
    </button>
    </article>
))}
        </div>
      </div>
      <footer style={bl.footer}>
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
}



export default Blog;
