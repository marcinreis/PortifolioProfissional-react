import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 40px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Círculo decorativo de fundo */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,200,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Conteúdo principal em linha */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "70px",
          maxWidth: "900px",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Foto do dono do portfólio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Anel turquesa em volta da foto */}
          <div
            style={{
              width: "230px",
              height: "230px",
              borderRadius: "50%",
              border: "3px solid #00d4c8",
              padding: "5px",
              boxShadow: "0 0 40px rgba(0, 212, 200, 0.3)",
            }}
          >
            {/* ===== COLOQUE O CAMINHO DA SUA FOTO AQUI ===== */}
            <img
              src=""
              alt="Foto de perfil"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                backgroundColor: "#1a1a1a", // Cor de fundo enquanto sem foto
              }}
            />
          </div>
        </motion.div>

        {/* Textos */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          {/* Saudação */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "#00d4c8",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.9rem",
              letterSpacing: "3px",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            Olá, eu sou
          </motion.p>

          {/* Nome */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              color: "#ffffff",
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: "700",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            {/* ===== COLOQUE SEU NOME AQUI ===== */}
            Seu Nome
            <br />
            <span style={{ color: "#00d4c8" }}>Aqui</span>
          </motion.h1>

          {/* Cargo / descrição */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              color: "#aaaaaa",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              marginBottom: "32px",
              maxWidth: "400px",
            }}
          >
            {/* ===== EDITE SUA DESCRIÇÃO AQUI ===== */}
            Estudante de Desenvolvimento Web apaixonado por criar
            interfaces modernas e funcionais. Focado em React e tecnologias
            front-end.
          </motion.p>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            {/* Botão principal */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,212,200,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("projetos")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                backgroundColor: "#00d4c8",
                color: "#0a0a0a",
                border: "none",
                padding: "12px 28px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.85rem",
                fontWeight: "700",
                letterSpacing: "1px",
                cursor: "pointer",
                borderRadius: "4px",
                textTransform: "uppercase",
              }}
            >
              Ver Projetos
            </motion.button>

            {/* Botão secundário */}
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#00d4c8", color: "#00d4c8" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("contato")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid #444",
                padding: "12px 28px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                cursor: "pointer",
                borderRadius: "4px",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
            >
              Contato
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Seta de scroll para baixo */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#00d4c8",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
        onClick={() =>
          document
            .getElementById("projetos")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;

