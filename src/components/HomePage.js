import React from "react";
import ArticleList from "./ArticleList";

function HomePage() {
  return (
    <div className="App">
      {/* inserire header */}
      <h1>Ultime novità dal mondo tech e del coding</h1>

      <div className="hero">
        <h1>Il futuro è qui: le notizie tech più interessanti del momento</h1>
        <p>Tieniti aggiornato con il nostro sito web</p>
      </div>

      {/* altro contenuto della pagina */}

      <ArticleList />
      {/* inserire footer */}
      <footer> Questo è il footer</footer>
    </div>
  );
}

export default HomePage;
