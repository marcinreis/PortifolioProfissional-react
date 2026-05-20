import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  // Estado para saber se o usuário rolou a página
  const [rolou, setRolou] = useState(false);

  // Escuta o scroll da página
  useEffect(() => {
    function verificarScroll() {
      if (window.scrollY > 50) {
        setRolou(true);
      } else {
        setRolou(false);
      }
    }

    window.addEventListener("scroll", verificarScroll);

    // Limpa o evento quando o componente é desmontado
    return () => window.removeEventListener("scroll", verificarScroll);
  }, []);

  // Função para rolar suavemente até uma seção
  function irParaSecao(id) {
    const secao = document.getElementById(id);
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.nav
      // Animação de entrada da navbar
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "14px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // Muda o fundo quando o usuário rola
        backgroundColor: rolou ? "rgba(10, 10, 10, 0.95)" : "transparent",
        backdropFilter: rolou ? "blur(10px)" : "none",
        borderBottom: rolou ? "1px solid rgba(0, 212, 200, 0.2)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo / Nome */}
      <motion.span
        whileHover={{ scale: 1.05 }}
        style={{
          color: "#00d4c8",
          fontFamily: "'Space Mono', monospace",
          fontSize: "1.3rem",
          fontWeight: "700",
          cursor: "pointer",
          letterSpacing: "2px",
        }}
        onClick={() => irParaSecao("inicio")}
      >
        {"Marcio Reis"}
      </motion.span>

      {/* Links de navegação */}
      <div style={{ display: "flex", gap: "32px" }}>
        {["inicio", "projetos", "contato"].map((item) => (
          <motion.button
            key={item}
            whileHover={{ color: "#00d4c8", y: -2 }}
            onClick={() => irParaSecao(item)}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.85rem",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              padding: "4px 0",
              transition: "color 0.3s ease",
            }}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
