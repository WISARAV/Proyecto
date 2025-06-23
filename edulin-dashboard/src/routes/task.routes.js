// backend/routes/task.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/tasks/submit', upload.single('file'), (req, res) => {
  const file = req.file;
  const description = req.body.description;

  // Aquí puedes guardar en base de datos
  console.log("Archivo recibido:", file);
  console.log("Descripción:", description);

  res.json({ message: "Tarea recibida", file, description });
});

module.exports = router;