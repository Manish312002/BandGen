
import express from "express";
import names from "random-names-generator"

const app = express();
const port = 3000;
const genre =  [
    "Rock",
    "Pop",
    "Hip Hop",
    "Jazz",
    "Classical",
    "Electronic",
    "Country",
    "Blues",
    "Reggae",
    "Metal",
    "Folk",
    "R&B",
    "Soul",
    "Punk",
    "Indie",
    "Alternative",
    "EDM",
    "Dance",
    "Latin",
    "World",
    "Opera",
    "Ambient",
    "Experimental",
    "Gospel",
    "Ska",
    "Dubstep",
    "Trap",
    "Techno",
    "House",
    "Synthwave",
    "Grunge",
    "Post-Rock",
    "Progressive",
    "Acoustic",
    "New Age",
    "Traditional",
    "Bluegrass",
    "Vocal",
    "Instrumental",
    "Singer-Songwriter"
  ]

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs")
    console.log(genre[Math.floor(Math.random()*genre.length)])
})

app.post('/submit',(req,res)=>{
    const bandType = genre[Math.floor(Math.random()*genre.length)]
    const name = names.random()+ bandType + " Band"
    res.render("index.ejs",{name : name})
})

app.listen(port,()=>{
    console.log("The port is connected... : http://localhost:3000")
})