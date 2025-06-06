const express = require("express");
const app = express();
const port = 8080;
const path = require("path");  //get path of views and public folders
const { v4: uuidv4 } = require('uuid');

const methodOverride = require("method-override");

app.use(methodOverride("_method"));
//malware
app.use(express.urlencoded({extended: true}));

//set view engin
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "satyam",
        content: "I love coding"
    }, 
    {
        id: uuidv4(),
        username: "tomar",
        content: "i love making website and writing coding"
    },
    {
        id: uuidv4(),
        username: "satya",
        content: "I got selected for coding rounds"
    }
];

//uuid universal unique ids
//it is a package

app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new" , (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("http://localhost:8080/posts")
});


app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id == p.id) ;
    res.render("show.ejs", {post});
});


app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id) ;
    post.content = newcontent;
    console.log(post);
    res.redirect("http://localhost:8080/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    post = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log("listening to port 8080");
});