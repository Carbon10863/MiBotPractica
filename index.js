const { detectarPlataforma } = require("./detector");
const { procesarYouTube } = require("./youtube");
const { procesarTikTok } = require("./tiktok");

// Simulación de mensaje que manda el usuario
const mensajeUsuario = "https://youtube.com/watch?v=12345";

const plataforma = detectarPlataforma(mensajeUsuario);

// Según la plataforma, hacemos una acción
if (plataforma === "youtube") {
  const respuesta = procesarYouTube(mensajeUsuario);
  console.log(respuesta);
} else if (plataforma === "tiktok") {
  const respuesta = procesarTikTok(mensajeUsuario);
  console.log(respuesta);
} else {
  console.log("❌ No reconocí ese link. Solo acepto YouTube o TikTok.");
	}
