const express = require("express");
const app = express();
const path = require("path");
const port =8080;


app.use(express.urlencoded({extended : true}));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname ,"views"));
app.set(express.static(path.join(__dirname ,"public")));

let posts=[
    {
        username : "abhishekanand22",
        content : "I love coding."
    },
    {
        username : "rahulkumar",
        content : "I love development."
    },
    {
        username : "rohansharma",
        content : "I love AI."
    },
];

app.get("/posts" , (req , res)=>{
    res.render("index", {posts});
})








app.listen(port,()=>{
    console.log("Listening to port 8080");
});

