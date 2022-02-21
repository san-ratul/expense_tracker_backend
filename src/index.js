require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Backend server started');
})

app.listen(port, host, () => {
    console.log(`Server is listening to port ${port}!`);
})
