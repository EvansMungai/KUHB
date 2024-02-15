const db = require('../config/database');

exports.showSigninPage = async (req, res) => {
    res.render('./layouts/signin', {
        pageTitle: "Sign In"
    });
}
exports.showLoginPage = async (req, res)=>{
    res.render('./layouts/login', {
        pageTitle: "Log in"
    })
}