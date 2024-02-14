const housekeeperController = require('../controllers/housekeeperController');

module.exports = (app)=>{
    app.get('/housekeeperdashboard', housekeeperController.showApplications);
}