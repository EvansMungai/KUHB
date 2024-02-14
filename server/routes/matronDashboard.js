const matronController = require('../controllers/matronController');

module.exports = (app)=>{
    app.get('/matrondashboard', matronController.showSuccessfulApplications);
}