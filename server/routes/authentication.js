const authenticationController = require('../controllers/authenticationController');

module.exports = (app)=>{
    app.get('/signin', authenticationController.showSigninPage);
    app.get('/login', authenticationController.showLoginPage);
    app.post('/signin', authenticationController.createUser);
    app.post('/login', authenticationController.authenticateUser);
    app.get('/logout', authenticationController.logoutUser)
}