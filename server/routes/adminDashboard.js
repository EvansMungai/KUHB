const adminController = require('../controllers/adminController');

module.exports = (app)=>{
    app.get('/admin', adminController.showHostels);
    app.get('/admin/registerhostels', adminController.hostelsRegistrationForm);
    app.post('/admin/registerhostels', adminController.registerHostels);
    app.get('/admin/registerrooms', adminController.roomsRegistrationForm);
    app.post('/admin/registerrooms', adminController.registerRooms);
    app.get('/admin/rooms', adminController.showRooms);
    app.get('/admin/students', adminController.showStudents);
    app.get('/admin/users', adminController.showUsers);
}