import { getDirname } from '../../src/node'

const __dirname = getDirname(import.meta.url)
console.log(__dirname + '/test.js')
