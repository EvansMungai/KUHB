const matronController = require('../controllers/matronController');

module.exports = (app)=>{
    app.get('/matron', matronController.showSuccessfulApplications);
    app.get('/matron/allocaterooms', matronController.showSuccessfulApplications);
}