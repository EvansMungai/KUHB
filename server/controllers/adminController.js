const db = require('../config/database');

exports.hostelsRegistrationForm = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            res.render('./layouts/adminRegisterHostels');
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}
exports.registerHostels = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
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
            db.query('insert into hostels set?', params, (err, result) => {
                if (err) {
                    throw err
                } else {
                    res.redirect('/admin')
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    }
}
exports.showHostels = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            db.query('select * from hostels', (err, result) => {
                if (err) {
                    return err;
                } else {
                    res.render('./layouts/adminDashboard', {
                        sampleData: result,
                    })
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}
exports.roomsRegistrationForm = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            db.query('select * from hostels', (err, result)=>{
                if (err) {
                    throw err
                } else {
                    res.render('./layouts/adminRegisterRooms',{
                        sampleData: result
                    });
                }
            })
        } else {
            res.send("Unauthorized access")
        }
    } else {
        res.redirect('/login')
    }
}
exports.registerRooms = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            var roomNo = req.body.RoomNo;
            var hostelNo = req.body.HostelNo;
            let params = {
                RoomNo: roomNo,
                HostelNo: hostelNo
            }
            db.query('insert into rooms set?', params, (err, result) => {
                if (err) {
                    throw err
                } else {
                    res.redirect('/admin/rooms')
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    }
}
exports.showRooms = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            db.query('select * from rooms', (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.render('./layouts/adminDashboardRooms', {
                        sampleData: result,
                    })
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}
exports.showStudents = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            db.query('select * from students', (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.render('./layouts/adminDashboardStudents', {
                        sampleData: result,
                    })
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login');
    }
}
exports.showUsers = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            db.query('select * from users', (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.render('./layouts/adminDashboardUsers', {
                        sampleData: result,
                    })
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}
exports.showUserDetails = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            var id = req.params.id;
            db.query('select * from users where Username=?', id, (err, result) => {
                if (err) {
                    throw err
                } else {
                    res.render('./layouts/adminUpdateUserRole', {
                        sampleData: result
                    });
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}
exports.viewAccountDetails = async (req, res) => {
    if (req.session.user) {
        db.query('select * from users where username=?', req.session.user, (err, result) => {
            if (err) {
                throw err
            } else {
                res.render('./layouts/userDetails', {
                    sampleData: result
                })
            }
        })
    } else {
        res.redirect('/login')
    }
}
exports.changeRoles = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Admin") {
            var id = req.params.username;
            var role = req.body.role;
            let params = {
                Role: role
            }
            db.query('update users set? where Username = ?;', [params, id], (err, result) => {
                if (err) {
                    throw err
                } else {
                    res.redirect('/admin/users')
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}