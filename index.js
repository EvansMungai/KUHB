const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/routes/adminDashboard')(app);
require('./server/routes/housekeeperDashboard')(app);
require('./server/routes/matronDashboard')(app);
require('./server/routes/studentDashboard')(app);
require('./server/routes/authentication')(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})
app.get('/logout', (req, res)=>{
    res.redirect('/');
})
app.get('*', (req, res)=>{
    res.render('./layouts/404page');
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})