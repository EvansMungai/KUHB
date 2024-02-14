const studentDashboardController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/student/dashboard', studentDashboardController.homepage);
    app.get('/student/accommodationdetails', studentDashboardController.applicationDetails);
    app.get('/student/userdetails', studentDashboardController.userDetails);
}