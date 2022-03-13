const fs = require('fs')

fs.writeFileSync('notes.txt','My name is Shristi Bansal.')
fs.appendFileSync('notes.txt',' I live in India.')