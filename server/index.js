const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth.js');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

app.use(cors());
app.use(express.json());
const api_key = process.env.STREAM_API_KEY;
console.log(api_key, 'is this right');
//might need to remove true
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);


app.use('/', express.static('./client/dist'));

// app.get('/', (req, res) => {
//   res.status(200).send();
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


app.listen(port, () => {
  console.log(`App listening at post: ${port}`);
});

