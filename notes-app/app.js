// const fs = require('fs')
// fs.writeFileSync('notes.txt','My name is Shristi Bansal.')
// fs.appendFileSync('notes.txt',' I live in India.')


// const fname = require('./utils.js')

// console.log(fname);

// const add = require('./utils.js')
// const sum = add(4,-2)
// console.log(sum);

const getNotes = require('./notes.js')
const notes = getNotes()
console.log(notes);