const util = require("util")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const addFileAsync = util.promisify(fs.writeFile);
const getFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("db/db.json","utf-8")
    }
    write(){
        return writeFileAsync("db/db.json","utf-8")
    }
    add(){
        return addFileAsync("db/db.json","utf-8")
    }
    get(){
        return getFileAsync("db/db.json", "utf-8")
    }

}

module.exports = new Store();
