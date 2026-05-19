import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Contato() {
  const ref = useRef(null);
  const visivel = useInView(ref, { once: true, margin: "-100px" });

  // ============================================================
  // SUAS INFORMAÇÕES DE CONTATO — edite aqui!
  // ============================================================
  const informacoesContato = [
    {
      icone: "✉",
      titulo: "Email",
      valor: "seuemail@email.com",       // <-- coloque seu email
      link: "mailto:seuemail@email.com",
    },
    {
      icone: "💼",
      titulo: "LinkedIn",
      valor: "linkedin.com/in/seu-perfil", // <-- coloque seu LinkedIn
      link: "https://linkedin.com/in/seu-perfil",
    },
    {
      icone: "🐙",
      titulo: "GitHub",
      valor: "github.com/seu-usuario",     // <-- coloque seu GitHub
      link: "https://github.com/seu-usuario",
    },
  ];
  // ============================================================

  return (
    <section
      id="contato"
      style={{
        minHeight: "70vh",
        backgroundColor: "#0a0a0a",
        padding: "100px 40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", width: "100%" }}>
        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visivel ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "50px", textAlign: "center" }}
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
            Vamos conversar
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
            Entre em Contato
          </h2>
          <p
            style={{
              color: "#888888",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              maxWidth: "450px",
              margin: "0 auto",
            }}
          >
            {/* ===== EDITE SEU TEXTO DE CONTATO AQUI ===== */}
            Estou sempre aberto a novas oportunidades e colaborações.
            Pode me chamar por qualquer um dos canais abaixo!
          </p>
        </motion.div>

        {/* Cards de contato */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {informacoesContato.map((info, index) => (
            <motion.a
              key={info.titulo}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={visivel ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -6,
                borderColor: "#00d4c8",
                boxShadow: "0 10px 30px rgba(0,212,200,0.15)",
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 20px",
                backgroundColor: "#111111",
                border: "1px solid #222",
                borderRadius: "8px",
                textDecoration: "none",
                textAlign: "center",
                cursor: "pointer",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Ícone */}
              <span
                style={{
                  fontSize: "2rem",
                  marginBottom: "12px",
                }}
              >
                {info.icone}
              </span>

              {/* Título */}
              <span
                style={{
                  color: "#00d4c8",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {info.titulo}
              </span>

              {/* Valor */}
              <span
                style={{
                  color: "#cccccc",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  wordBreak: "break-all",
                }}
              >
                {info.valor}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={visivel ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            color: "#444444",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            textAlign: "center",
            marginTop: "60px",
            letterSpacing: "1px",
          }}
        >
          {/* ===== EDITE O RODAPÉ AQUI ===== */}
          © 2025 · Feito com React + Framer Motion · Seu Nome
        </motion.p>
      </div>
    </section>
  );
}

export default Contato;
