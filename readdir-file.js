const fs = require('fs')

const readdir = fs.readdirSync('../file-system-project2', 'utf-8')
console.log(readdir);