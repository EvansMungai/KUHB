const housekeeperController = require('../controllers/housekeeperController');

module.exports = (app)=>{
    app.get('/housekeeper', housekeeperController.showApplications);
}