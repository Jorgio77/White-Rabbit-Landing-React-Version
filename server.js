const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const request = require("request");

const { apiKey } = require('./apiKey');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/submit', (req, res) => {
  const fname = req.body.name;
  const email = req.body.email;
  const data = {
    email_address: email,
    merge_fields: {
      "FNAME": fname
    },
    status: "subscribed"
  }

  const jsonData = JSON.stringify(data);

  const authHeader = "dsad"

  const options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/c843212d99/members",
    method: "POST",
    headers: {
      "Authorization": authHeader
    },
    body: jsonData
  }

  request(options, function(error, response, body) {
    if (error) {
      res.send("0")
    } else {
      console.log(response.body.status);
      if (!response.body.status) res.send("0");
      else res.send("1")
    }
  })
})

app.listen(process.env.PORT || 8080, () => console.log("Server started"));
