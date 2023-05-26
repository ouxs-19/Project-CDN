const express = require("express");
const router = express.Router();
const cors = require("cors");
const Files = require('../controllers/file.controller');

router.use(cors());

router.post('/add', Files.addFile);
router.get('/', Files.getAll);
router.delete('/*', Files.deleteByPath);

module.exports = router;