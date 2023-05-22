const express = require("express");
const router = express.Router();
const Files = require('../controllers/file.controller');

router.post('/add', Files.addFile);
router.get('/', Files.getAll);
router.delete('/*', Files.deleteByPath);

module.exports = router;