// bringing in the store stuff
const router = require("express").Router();
const store = require ("../db/store")

router.get("/notes", (req, res) => {
    store.get().then((notes)=>{
        return res.json(notes)
    })
    .catch((err)=> res.status(500).json(err))
})

router.post("/notes", (req, res) => {
    store.add(req.body).then((notes)=>{
        return res.json(notes)
    })
    .catch((err)=> res.status(500).json(err))
})

router.delete("/notes/:id", (req, res) => {
    store.delete(req.params.id).then(()=> res.json({ok:true}))
    .catch((err)=> res.status(500).json(err))
})



module.exports = router