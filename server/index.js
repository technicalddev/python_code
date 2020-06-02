const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios').default;
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  axios
    .get(`https://api.medium.com/v1/users/1234567890/publications`, {})
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error.toJSON());
      res.status(401).json(error.toJSON());
    });
});

app.listen(port, () => console.log(`Moneytor server app listening at ${port}`));
