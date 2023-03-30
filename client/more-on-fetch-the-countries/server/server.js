const express = require("express");
const cors = require("cors");
const path = require("path");

const { reader, writer } = require("./fileReader.js");
const filePathFavourites = path.join(`${__dirname}/favourites.json`);

const app = express();
app.use(express.json());
// app.use(urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-type']
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 9001;

app.get("/welcome", (req, res) => {
  res.send('Hello World!');
});

app.get("/", (req, res) => {
    res.redirect('../welcome')
});

app.route("/favourites")
.get(async(req, res) => {
    const favourites = await reader(filePathFavourites);
    res.json(favourites);
}) 
.post(async(req, res) => {
    const favourites = await reader(filePathFavourites);
    favourites.push(req.body);
    console.log(req.body)
    writer(filePathFavourites, favourites);
    res.send('Done')
})

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));