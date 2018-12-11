const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3002;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// process.env.NODE_ENV === 'production'
//   ? app.use(express.static('dist'))
//   : app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use('/images', express.static('public/images'));


app.get('/', (req, res) => {
  res.json({ test: 'success' });
});

app.listen(PORT, () => console.log('App listening on port ' + PORT + '!'));
