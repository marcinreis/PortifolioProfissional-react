// Importando os estilos do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importando os componentes que criamos
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Projetos from "./componentes/Projetos";
import Contato from "./componentes/Contato";

function App() {
  return (
    // Container principal da aplicação
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        // Importa a fonte Space Mono do Google Fonts
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {/* Importação da fonte via link no head (coloque isso no index.html também) */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" /> */}

      {/* Navbar fixo no topo */}
      <Navbar />

      {/* Seção de apresentação */}
      <Hero />

      {/* Seção de projetos */}
      <Projetos />

      {/* Seção de contato */}
      <Contato />
    </div>
  );
}

export default App;
