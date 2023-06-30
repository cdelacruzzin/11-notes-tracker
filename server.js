const express = require('express');
const path = require('path');



const app = express();

app.use(express.json()); //express.json() middleware parses incoming JSON payloads from HTTPS requests into js objects. via req.body
app.use(express.urlencoded({extended: true}));  //middleware parses incoming requests with url encoded payloads. via req.body

