// bringing in the store stuff
const router = require("express").Router();
const store = require ("../db/store")

router.get("/notes", (req, res) => {
    store.get().then((notes)=>{
        return res.json(notes)
    })
    .catch((err)=> res.status(500).json(err))
})

// router.post & router.delete

module.exports = router