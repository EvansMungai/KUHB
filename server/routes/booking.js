const bookingController = require('../controllers/studentDashboardController')

module.exports = (app)=>{
    app.get('/student/booking', bookingController.booking);
    app.post('/student/booking',bookingController.postBookingData);
}