const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/booking.html');
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
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    res.send("We have received your data");
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/src/login.html')
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})