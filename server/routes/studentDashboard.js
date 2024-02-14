const studentDashboardController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/studentdashboard', studentDashboardController.homepage);
    app.get('/student/accommodationdetails', studentDashboardController.applicationDetails);
    app.get('/student/userdetails', studentDashboardController.userDetails);
}