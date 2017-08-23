const express    = require('express');
const app        = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const cors       = require('cors');

// setup mongoose
mongoose.connect('mongodb://localhost/contact-api');//mongoosejs.com

// setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// setup cors
app.use(cors());


app.use('/api/contact', require('./api/contacts/routes/post_contact'));
app.use('/api/contact', require('./api/contacts/routes/get_contact'));

app.listen(3004, () => {
  console.log('les contacts tournent sur le port :3004');
})
