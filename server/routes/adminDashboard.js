const adminController = require('../controllers/adminController');

module.exports = (app)=>{
    app.get('/admin', adminController.showHostels)
    app.get('/admin/rooms', adminController.showRooms);
    app.get('/admin/students', adminController.showStudents);
    app.get('/admin/users', adminController.showUsers);
}