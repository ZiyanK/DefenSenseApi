const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

