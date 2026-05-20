import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import joabkidslogo from "../imagens/joabkidslogo.jpeg";
import logoVesteBem from "../imagens/logoVesteBem.png";

// ============================================================
// LISTA DE PROJETOS — edite aqui para adicionar os seus!
// ============================================================
const listaDeProjetos = [
  {
    id: 1,
    nome: "JoabKids-Market",
    descricao: "A Joab Kids é uma loja física de roupas e calçados infantis localizada em Canindé, Ceará, que hoje realiza suas vendas principalmente pelo Instagram e WhatsApp. Este projeto tem como objetivo digitalizar esse processo, criando uma plataforma de e-commerce completa para ampliar o alcance da loja e oferecer uma experiência de compra mais organizada para os clientes.",
    tecnologias: ["React", "CSS", "js", "node.js", "express"],
    linkRepositorio: "https://github.com/lefitano/JoabKids-Market", // <-- coloque o link do repositório
    logoSrc: joabkidslogo, // <-- coloque o caminho da logo ex: "/imagens/logo1.png"
  },
  {
    id: 2,
    nome: "VesteBem",
    descricao: "Plataforma digital de doação de roupas que conecta doadores a beneficiários e ONGs, com foco em melhorar a distribuição geográfica e a qualidade das peças entregues a pessoas em situação de vulnerabilidade social.",
    tecnologias: ["React", "CSS", "js", "node.js", "express"],
    linkRepositorio: "https://github.com/marcinreis/VesteBem",
    logoSrc: logoVesteBem,
  },
  {
    id: 3,
    nome: "MeuSalao",
    descricao: "MeuSalão é um marketplace digital de serviços de beleza com foco em descoberta local e agendamento direto. A plataforma conecta clientes a salões de beleza próximos, centralizando serviços, agenda, preços e avaliações em um único lugar. Solução mobile-first voltada para conveniência, rapidez e proximidade.",
    tecnologias: ["React", "Typescript"],
    linkRepositorio: "https://github.com/marcinreis/2026.1_PA1_CD_MeuSalao",
  },
];
// ============================================================

// Componente de cada card de projeto
function CardProjeto({ projeto, index }) {
  const ref = useRef(null);
  // Detecta quando o card entra na tela
  const visivel = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={visivel ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ width: "100%" }}
    >
      <motion.a
        href={projeto.linkRepositorio}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,212,200,0.2)" }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111111",
          border: "1px solid #222",
          borderRadius: "8px",
          padding: "28px",
          textDecoration: "none",
          cursor: "pointer",
          transition: "border-color 0.3s ease",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#00d4c8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#222";
        }}
      >
        {/* Linha turquesa no topo do card */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, #00d4c8, transparent)",
          }}
        />

        {/* Logo do projeto */}
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: "#1a1a1a",
            borderRadius: "8px",
            border: "1px solid #333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            overflow: "hidden",
          }}
        >
          {/* ===== COLOQUE A LOGO DO PROJETO COM img src="" ===== */}
          <img
            src={projeto.logoSrc}
            alt={`Logo ${projeto.nome}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "8px",
            }}
          />
        </div>

        {/* Nome do projeto */}
        <h3
          style={{
            color: "#ffffff",
            fontFamily: "'Space Mono', monospace",
            fontSize: "1rem",
            fontWeight: "700",
            marginBottom: "10px",
            letterSpacing: "0.5px",
          }}
        >
          {projeto.nome}
        </h3>

        {/* Descrição */}
        <p
          style={{
            color: "#888888",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.78rem",
            lineHeight: 1.7,
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {projeto.descricao}
        </p>

        {/* Tags de tecnologias */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: "rgba(0,212,200,0.1)",
                color: "#00d4c8",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.68rem",
                padding: "3px 10px",
                borderRadius: "20px",
                border: "1px solid rgba(0,212,200,0.3)",
                letterSpacing: "0.5px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link do repositório */}
        <div
          style={{
            marginTop: "20px",
            color: "#00d4c8",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "1px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>Ver no GitHub</span>
          <span>→</span>
        </div>
      </motion.a>
    </motion.div>
  );
}

// Componente principal da seção de projetos
function Projetos() {
  const ref = useRef(null);
  const visivel = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projetos"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
        padding: "100px 40px",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Cabeçalho da seção */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visivel ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "60px" }}
        >
          <p
            style={{
              color: "#00d4c8",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            O que eu fiz
          </p>
          <h2
            style={{
              color: "#ffffff",
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Meus Projetos
          </h2>
          {/* Linha decorativa */}
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#00d4c8",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        {/* Grid de cards */}
        <div
          className="row g-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}
        >
          {listaDeProjetos.map((projeto, index) => (
            <CardProjeto key={projeto.id} projeto={projeto} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
