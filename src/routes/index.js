const { Router } = require('express');
const router = new Router();

// Ruta principal
router.get("/", (req, res) => {
    res.render("index");
});
  
  // Ruta para convertir imágenes
router.get("/convertir", (req, res) => {
    res.render("convertir");
});
  
  // Ruta para mostrar el GIF
router.get("/GIF", (req, res) => {
    res.render("gif");
});

module.exports = router;