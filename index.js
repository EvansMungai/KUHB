const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public/stylesheets'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})