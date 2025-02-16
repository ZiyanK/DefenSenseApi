const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');
const bodyParser = require("body-parser")
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const soldierRoute = require('./routes/soldierRoutes');

app.use('/soldier', soldierRoute);

const port = process.env.PORT
app.listen(port,()=>{
    console.log('Server is up on port ',port)
})

//this should be working