const db = require('../config/database');

exports.showHostels = async (req, res) => {
    db.query('select * from hostels', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/adminDashboard', {
                sampleData: result,
            })
        }
    })
}
exports.showRooms = async (req, res)=>{
    db.query('select * from rooms', (err, result)=>{
        if (err) {
            throw err;
        } else {
            res.render('./layouts/adminDashboardRooms', {
                sampleData: result,
            })
        }
    })
}
exports.showStudents = async (req, res)=>{
    db.query('select * from students', (err, result)=>{
        if (err) {
            throw err;
        } else {
            res.render('./layouts/adminDashboardStudents', {
                sampleData: result,
            })
        }
    })
}
exports.showUsers = async (req, res)=>{
    db.query('select * from users', (err, result)=>{
        if (err) {
            throw err;
        } else {
            res.render('./layouts/adminDashboardUsers', {
                sampleData: result,
            })
        }
    })
}