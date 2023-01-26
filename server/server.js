const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = mongoose;
const port = 8080;
app.use(cors())
app.use(bodyParser.json())

const studentsSchema = new Schema({
    imgUrl: {type: String, require: true},
    name: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
})
const Students = mongoose.model("student", studentsSchema)
app.get("/student", (req, res) => {
    Students.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        } else {
            res.status(500).json({ message: "Student Not Found"})
        }
    })
})
app.get("/student/:id", (req, res) => {
    const { id } = req.params
    Students.findById(id, (err, docs) => {
        if(!err){
            res.send(docs)
        } else {
         res.status(500).json({ message: "Student Not Found"})
        }
    })
})
app.delete("/student/:id", (req, res) => {
    const { id } = req.params
    Students.findByIdAndDelete(id, (err, docs) => {
        if(!err){
            res.send(docs)
        } else {
         res.status(404).json({ message: "Student Not Found"})
        }
    })
})

app.post("/student", (req, res) => {
    let newStudent = new Students({
        imgUrl: req.body.imgUrl,
        name: req.body.name,
        title: req.body.title,
        description: req.body.description
    })
    newStudent.save()
    res.send({ message: "Post"})
})

mongoose.connect(
    "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/?retryWrites=true&w=majority",
    err => {
      if(!err){
        app.listen(port, () => {
            console.log("DB CONNECT");
            console.log(`http://localhost:${port}`);
        })
      } 
    }
)