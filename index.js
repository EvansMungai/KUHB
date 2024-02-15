const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./server/config/database');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/routes/adminDashboard')(app);
require('./server/routes/housekeeperDashboard')(app);
require('./server/routes/matronDashboard')(app);
require('./server/routes/studentDashboard')(app);
require('./server/routes/authentication')(app);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/src/index.html');
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})