const studentDashboardController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/studentdashboard', studentDashboardController.homepage);
}