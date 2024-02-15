const db = require('../config/database');

exports.hostelsRegistrationForm = async (req,res)=>{
    res.render('./layouts/adminRegisterHostels');
}
exports.registerHostels = async (req, res)=>{
    var hostelNo = req.body.HostelNo;
    var hostelName = req.body.HostelName;
    var capacity = req.body.Capacity;
    var type = req.body.Type;
    let params = {
        HostelNo: hostelNo,
        HostelName: hostelName,
        Capacity: capacity,
        Type: type
    }
    db.query('insert into hostels set?', params, (err, result)=>{
        if (err) {
            throw err
        } else {
            res.redirect('/admin')
        }
    })
}
exports.roomsRegistrationForm = async (req, res)=>{
    res.render('./layouts/adminRegisterRooms');
}
exports.registerRooms = async (req, res)=>{
    var roomNo = req.body.RoomNo;
    var hostelNo = req.body.HostelNo;
    let params = {
        RoomNo: roomNo,
        HostelNo: hostelNo
    }
    db.query('insert into rooms set?', params, (err, result)=>{
        if (err) {
            throw err
        } else {
            res.redirect('/admin/rooms')
        }
    })
}
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