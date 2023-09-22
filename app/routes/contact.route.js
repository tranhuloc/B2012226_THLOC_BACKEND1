const express = require('express');
const contacts = require('../controllers/contact.controller');
const { route } = require('../../app');

const router = express.Router();

router.route('/')
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route('/favorite')
    .get(contacts.findOne)
    .post(contacts.update)
    .delete(contacts.delete);

module.exports = router;