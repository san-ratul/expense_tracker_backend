require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

//mongoDB configuration
const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const DBUrl = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.iwb9d.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(DBUrl, {
    useNewUrlParser: true,
}).then (() => {
    console.log('Database connection successful!');
}).catch (error => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Backend server started');
})

// project routes start
require('./Routes/routes')(app);
// project routes start

app.listen(port, host, () => {
    console.log(`Server is listening to port ${port}!`);
})
