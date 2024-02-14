const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./server/config/database');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/routes/adminDashboard')(app);
require('./server/routes/application')(app);
require('./server/routes/booking')(app);
require('./server/routes/housekeeperDashboard')(app);
require('./server/routes/matronDashboard')(app);
require('./server/routes/studentDashboard')(app);

app.get('/login', (req, res) => {
    res.render('./layouts/login', {
        pageTitle: "Log In"
    });
})
app.get('/signin', (req, res) => {
    res.render('./layouts/sign', {
        pageTitle: "Sign In"
    });
})
app.post('/application', (req, res) => {
    var registrationNo = req.body.RegNo;
    var applicationPeriod = req.body.ApplicationPeriod;
    var disabled = req.body.isDisabled;
    var disabilityDetails = req.body.DisabilityDetails;
    var accommodationBefore = req.body.accommodationBefore;
    var accommodationPeriod = req.body.AccommodationPeriod;
    var sponsored = req.body.IsSponsored;
    var sponsor = req.body.sponsor;
    var receivesHelb = req.body.ReceivesHelb;
    var helbAmount = req.body.HelbAmount;
    var receivedBursary = req.body.ReceivedBursary;
    var bursaryAmount = req.body.BursaryAmount;
    var workStudyBenefitsBefore = req.body.WorkStudyBenefitsBefore;
    var workStudyPeriod = req.body.WorkStudyPeriod;
    var specialExamsOnFinancialGrounds = req.body.deferred;
    var specialExamsPeriod = req.body.SpecialExamPeriod;
    var reasonsForConsideration = req.body.ReasonsForConsideration;
    let params = {
        ApplicationNo: 1,
        ApplicationPeriod: applicationPeriod,
        RegistrationNo: registrationNo,
        Disability: disabled,
        DisabilityDetails: disabilityDetails,
        AccommodatedBefore: accommodationBefore,
        AccommodationPeriod: accommodationPeriod,
        IsSponsored: sponsored,
        Sponsor: sponsor,
        ReceivesHelb: receivesHelb,
        HelbAmount: helbAmount,
        ReceivedBursary: receivedBursary,
        BursaryAmount: bursaryAmount,
        WorkStudyBenefitsBefore: workStudyBenefitsBefore,
        WorkStudyPeriod: workStudyPeriod,
        SpecialExamsOnFinancialGrounds: specialExamsOnFinancialGrounds,
        SpecialExamPeriod: specialExamsPeriod,
        ReasonsForConsideration: reasonsForConsideration
    }
    db.query('insert into applications set?', params, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send("We have received your data");
            res.redirect('/studentdashboard')
        }
    })
})


app.post('/signin', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    let params = {
        Username: username,
        Password: password
    }
    db.query('insert into users set?', params, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/studentdashboard');
        }
    })
});

// app.get('/login', (req, res) => {
//     res.render('./layouts/login', {
//         pageTitle: "Log in"
//     })
// })

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