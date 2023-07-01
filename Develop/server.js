const express = require('express');
const path = require('path');
const api = require('./routes/index');

const port = 3003;
const app = express();

app.use(express.json()); //express.json() middleware parses incoming JSON payloads from HTTPS requests into js objects. via req.body
app.use(express.urlencoded({extended: true}));  //middleware parses incoming requests with url encoded payloads. via req.body
app.use('/api', api);

app.use(express.static('public'));  //tells express.js that any files in the 'public' directory should be served as-is to the client when they request a url that matches the file's path.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port} 🚀`);
})
