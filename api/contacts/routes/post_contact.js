const express  = require('express');
const mongoose = require('mongoose');
const router   = express.Router();
const Contact  = require('../model/contact');

router.route('/')
.post((req, res) => {
  const contact = new Contact(req.body);
  contact.save((err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  })
});

module.exports = router;
