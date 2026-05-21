import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./componentes/navbar";
import Hero from "./componentes/hero";
import Projetos from "./componentes/projetos";
import Contato from "./componentes/contato";

function App() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;