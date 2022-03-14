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

const validator = require('validator')
// email validator
console.log(validator.isEmail('abc@xyz.com'))
console.log(validator.isEmail('abcxyz.com'))
// url validator
console.log(validator.isURL('https://www.google.com'))
console.log(validator.isURL('https//www.google.com'))

//challenge
const chalk = require('chalk')
console.log(chalk.green('Success!'))
console.log(chalk.green.bold('Success!'))
console.log(chalk.bold.inverse.green('Success!'))