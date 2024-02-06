const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/studentdashboard', (req, res)=> {
    res.render('studentdashboard');
})
app.get('/booking', (req, res) => {
    res.render('booking');
})

app.get('/application', (req, res)=> {
    res.render('application');
})

app.post('/booking', (req, res)=> {
    var hostelName = req.body.hostelName;
    var room = req.body.room;
    var bunk = req.body.bunk;
    var gender = req.body.gender;
    res.send("We have received your data");
    console.log(hostelName);
    console.log(room);
    console.log(bunk);
    console.log(gender);
})

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/src/signin.html');
})

app.post('/signin', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    res.send("We have received your data");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/src/login.html')
})

app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    res.send("We have received your data");
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})