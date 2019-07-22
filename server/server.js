const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected on ${port}`);
})

app.get('/', (req, res)=>{
  res.status(200).send("Connected to the server")
})
