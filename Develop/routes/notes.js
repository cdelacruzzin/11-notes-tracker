const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;

    readFromFile('./db/db.json') 
        .then((data)=> JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            return result.length > 0
            ? res.json(result)
            : res.json('no note with that id');
        })
});


notes.post('/', (req, res) => {
    const { title, text } = req.body;


    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note successfully added');
    } else {
        res.error('Error in adding note');
    }
})


module.exports = notes;
