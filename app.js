const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const tasksDirectory = path.join(__dirname, "tasks");
    fs.readdir(tasksDirectory, (err, files) => {
        if (err) {
            console.error("Error reading tasks directory:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.render("index", { files: files , fsmodule:fs });
    });
});


app.get("/file/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "tasks", filename);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.send("Can't read the task");
        } else {
            res.render("taskdescription",{title : filename ,details:data})
        }
    });
});



app.get("/edit/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "tasks", filename);
     fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.send("Can't read the task");
        } else {
          res.render("edit", { filename: filename, taskDetails: data });
        }
    });
    
});

app.post("/update/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "tasks", filename);
    const updatedDetails = req.body.details; 
    fs.writeFile(filePath, updatedDetails, (err) => {
        if (err) {
            res.send("Error occurred while updating");
        } else {
            res.redirect("/");
        }
    });
});

app.post("/delete/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "tasks", filename);
    fs.unlink(filePath, (err) => {
        if (err) {
            res.send("Error occurred while deleting");
        } else {
            res.redirect("/");
        }
    });
});





app.post("/create", (req, res) => {
    fs.writeFile(`${__dirname}/tasks/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect("/")
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
