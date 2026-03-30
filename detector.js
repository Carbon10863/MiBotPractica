function detectarPlataforma(link) {
  if (link.includes("youtube.com") || link.includes("youtu.be")) {
    return "youtube";
  } else if (link.includes("tiktok.com")) {
    return "tiktok";
  } else {
    return "desconocido";
  }
}

module.exports = { detectarPlataforma };
