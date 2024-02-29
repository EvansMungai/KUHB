const matronController = require('../controllers/matronController');

module.exports = (app)=>{
    app.get('/matron', matronController.showSuccessfulApplications);
    app.get('/matron/viewallocations/:id', matronController.viewAllocations);
    app.get('/userdetails', matronController.viewUserDetails);
    app.post('/matron/reviewallocations/:id', matronController.allocateRoom);
    app.get('/matron/occupiedrooms', matronController.viewAllocatedRooms);
}