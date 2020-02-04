// const validator = require('validator')
const note = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

// custome yarg version 
yargs.version('1.1.0')


// Creating add command 
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder:{
        title: {
            describle: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        note.addNote(argv.title, argv.body)

    }
})

// Creating remove command 
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title:{
            describe: "Remove note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        note.removeNote(argv.title)
    }
})

// Creating list command
yargs.command({
    command:'list',
    describe: 'To list all notes',
    handler (){
        note.listNote()
    }
})

// Creating a read command 
yargs.command({
    command:'read',
    describe:'to read the note',
    builder: {
        title: {
            describe: 'read note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        note.readNote(argv.title)
    }
})

// Add, remove, read, list 
yargs.parse()


// const command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding Note!')
// } else if (command === 'remove'){
//     console.log('Removing Note!')
// }
// console.log(process.argv)
// const msg = note()
// console.log(msg)

// // console.log(validator.isEmail('sanjaysekar94@gmail.com'))
// // console.log(validator.isURL('tootle'))

// console.log(chalk.blue.bold('HOLD!'))
// console.log(process.argv[2])
