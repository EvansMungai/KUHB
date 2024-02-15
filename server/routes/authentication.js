const authenticationController = require('../controllers/authenticationController');

module.exports = (app)=>{
    app.get('/signin', authenticationController.showSigninPage);
    app.get('/login', authenticationController.showLoginPage);
}