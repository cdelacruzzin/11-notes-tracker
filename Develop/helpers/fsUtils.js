const fs = require('fs');   // imports fs
const util = require('util');   //imports util

const readFromFile = util.promisify(fs.readFile);   //util.promisify turns the call back of fs.readFile into a promise.
// fs.readFile is a function that reads a file and provides its contents into a callback.


const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        err ? console.log(err) : console.info(`\nData written to ${destination}`)
    });
}

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

  module.exports = {readFromFile, writeToFile, readAndAppend};
  