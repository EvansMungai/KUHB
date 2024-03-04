const housekeeperController = require('../controllers/housekeeperController');

module.exports = (app)=>{
    app.get('/housekeeper', housekeeperController.showApplications);
    app.get('/housekeeper/viewapplications/:id', housekeeperController.viewApplications);
    app.get('/housekeeper/userdetails', housekeeperController.viewUserDetails);
    app.post('/housekeeper/reviewapplications/:appNo', housekeeperController.reviewApplictions);
    app.get('/housekeeper/successfulapplications', housekeeperController.showSuccessfulApplications);
}