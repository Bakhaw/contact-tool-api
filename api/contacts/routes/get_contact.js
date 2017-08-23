const express  = require('express');
const mongoose = require('mongoose');
const router   = express.Router();
const Contact  = require('../model/contact');

router.route('/')
.get((req, res) => {
  const contact = new Contact(req.body);
  Contact.find((err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  })
});

module.exports = router;
