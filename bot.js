const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const { detectarPlataforma } = require("./detector");
const { procesarYouTube } = require("./youtube");
const { procesarTikTok } = require("./tiktok");

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("📲 Escanea este QR con WhatsApp");
});

client.on("ready", () => {
  console.log("✅ Bot conectado y listo");
});

client.on("message", async (message) => {
  const texto = message.body;

  const plataforma = detectarPlataforma(texto);

  if (plataforma === "youtube") {
    const respuesta = procesarYouTube(texto);
    await message.reply(respuesta);
  } else if (plataforma === "tiktok") {
    const respuesta = procesarTikTok(texto);
    await message.reply(respuesta);
  }
});

client.initialize();
