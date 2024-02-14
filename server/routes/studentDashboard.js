const studentDashboardController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/studentdashboard', studentDashboardController.homepage);
    app.get('/studentdashboard/applicationdetails', studentDashboardController.applicationDetails);
}