const studentDashboardController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/student', studentDashboardController.homepage);
    app.get('/student/booking', studentDashboardController.booking);
    app.get('/student/application', studentDashboardController.application);
    app.get('/student/accommodationdetails', studentDashboardController.applicationDetails);
    app.get('/student/userdetails', studentDashboardController.userDetails);
}