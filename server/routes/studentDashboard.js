const studentDashboardController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/student', studentDashboardController.homepage);
    app.get('/student/registration', studentDashboardController.studentsRegistrationForm);
    app.post('/student/registration', studentDashboardController.registration);
    app.get('/student/application', studentDashboardController.application);
    app.get('/student/applicationdetails', studentDashboardController.applicationDetails);
    app.get('/student/accommodationdetails', studentDashboardController.accommodationDetails);
    app.post('/student/application', studentDashboardController.sendApplication);
}