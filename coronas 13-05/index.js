require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const server = express();
const PORT = process.env.PORT;
const product = require("./data/product")

server.use(express.static(__dirname + "/static"));

server.use(express.urlencoded({
    extended: false
}));



server.set("views", __dirname + "/views");
server.set("view engine", "hbs");

server.get(["/", "/index"], (req, res) => {
    res.render("index", {
        title: "Page principale",
    });
});

server.get("/formulaire", (req, res) => {
    res.render("formulaire", {
        title: "formulaire",
    });
});

server.get("/produit", (req, res) => {
    const data = {
        title: "produit",
        produits: product
    }
    res.render("produit", data);
});

server.post("/formulaire", (req, res) => {
    console.log(req.body)
})


server.listen(PORT, () => {
    console.log(`server running @ http://localhost:${PORT}`);
});