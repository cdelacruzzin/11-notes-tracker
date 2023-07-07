# 11-notes-tracker

## Description
The goal of this application is to use express to create REST apis. The server.js file sets up a basic server that serves different HTML files for specific routes and a custom 404 page for unknown routes. The index.js sets up an Express application and mounts a separate router module (notesRouter) to handle routes starting with '/notes'.

## Installation
- express
- node.js
  
## Usage
The user will be directed to a main page with a button. If that button is clicked, the user will be redirected to the notes page. In this page, the user can add new notes. to add new notes, the user can click the "plus" button at the top right of the screen if there is no notes in database. the User can then input a note title, and their note text. To save this note, click the save button on the top right of the screen. To delete a note, click the red garbage bin button on the note you want to delete.

## License
Please refer to LICENSE folder