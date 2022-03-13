const util = require("util")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("db/db.json","utf-8")
    }
    write(note){
        return writeFileAsync("db/db.json",JSON.stringify(note))
    }
    add(note){
        const {title, text} = note
        if (!title || !text) {
        throw new Error("title and text are required")    
        }
        const newNote = {
            title, text, id:uuidv4()
        }
        return this.get().then((notes)=> [...notes, newNote])
        .then((parsedNotes)=> this.write(parsedNotes))
        .then(()=> newNote)
    }
       
    get(){
        return this.read().then((notes)=>{
            let newNote
            try {
                newNote = [].concat(JSON.parse(notes))
            } catch (error) {
                newNote = []
            }
            return newNote
        })
    }

    delete(id){
        return this.get().then((notes)=> notes.filter((note)=> note.id != id))
        .then((deleteNote)=> this.write(deleteNote))
        
    }
        

}

module.exports = new Store();
