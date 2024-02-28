const db = require('../config/database');
const bycrpt = require('bcrypt');

exports.showSigninPage = async (req, res) => {
    res.render('./layouts/signin', {
        pageTitle: "Sign In"
    });
}
exports.showLoginPage = async (req, res) => {
    res.render('./layouts/login', {
        pageTitle: "Log in"
    })
}
exports.createUser = async (req, res) => {
    try {
        const username = req.body.username;
        const hashedPassword = await bycrpt.hash(req.body.password, 10);
        let params = {
            Username: username,
            Password: hashedPassword
        }
        db.query('insert into users set?', params, (err, result) => {
            if (err) {
                throw err
            } else {
                db.query('select * from students', (err, result) => {
                    if (err) {
                        return err;
                    } else {
                        res.render('./layouts/studentdashboard', {
                            sampleData: result,
                        })
                    }
                })
            }
        })
    } catch (error) {
        res.send(error);
    }
}
exports.authenticateUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query('select * from users where username=?', username, async (err, result) => {
        if (err) {
            throw err
        }
        try {
            const retrievedHashedPassword = result.map(data => data.Password);
            const hashedPassword = retrievedHashedPassword.toString();
            const retrievedRole = result.map(data => data.Role);
            const userRole = retrievedRole.toString();
            if (await bycrpt.compare(password, hashedPassword)) {
                req.session.user = username;
                switch (userRole) {
                    case "Admin":
                        res.redirect('/admin')
                        break;
                    case "Student":
                        res.redirect('/student')
                        break;
                    case "Housekeeper":
                        res.redirect('/housekeeper')
                        break;
                    case "Matron":
                        res.redirect('/matron')
                        break;
                    default:
                        break;
                }
            } else {
                res.send('Invalid password')
            }
        } catch (error) {
            console.log(error);
        }
    })
}
exports.logoutUser = async (req, res) => {
    req.session.destroy((err)=>{
        if (err) {
            throw err
        } else {
            res.redirect('/')
        }
    })
}