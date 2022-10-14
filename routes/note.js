const express = require('express');
const router = express.Router();
const {createNote, getAllNotes } = require('../controllers/note');

router.route('/createNote').post(createNote);
router.route('/createNote').get(createNote);

module.exports = router;