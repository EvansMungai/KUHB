const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/booking.html');
})
app.get('/signin', (req, res)=> {
    res.sendFile(__dirname + '/src/signin.html');
})
app.get('/login', (req, res)=> {
    res.sendFile(__dirname + '/src/login.html')
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})