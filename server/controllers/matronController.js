const db = require('../config/database');
exports.showSuccessfulApplications = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Matron") {
            db.query('select * from applications where status = "Accepted"', (err, result) => {
                if (err) {
                    res.render('./layouts/errorpage', {
                        error: err,
                        redirect: "Go back",
                        redirectLink: "/matron"
                    })
                } else {
                    res.render('./layouts/matronDashboard', {
                        link1: "Review Allocations",
                        link1Href: "/matron",
                        link2: "Allocated Rooms",
                        link2Href: "/matron/occupiedrooms",
                        link3Href: "/matron/userdetails",
                        sampleData: result,
                    })
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess');
        }
    } else {
        res.redirect('/login');
    }
}
exports.viewAllocations = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Matron") {
            var id = req.params.id;
            db.query('select * from applications where ApplicationNo=?;', id, (err, result) => {
                if (err) {
                    res.render('./layouts/errorpage', {
                        error: err,
                        redirect: "Go back",
                        redirectLink: "/matron"
                    })
                } else {
                    db.query('select * from rooms', (err, result2) => {
                        res.render('./layouts/matronReviewAllocations', {
                            link1: "Review allocations",
                            link1Href: "/matron",
                            link2: "Allocated Rooms",
                            link2Href: "/matron/occupiedrooms",
                            link3Href: "/matron/userdetails",
                            sampleData: result,
                            roomsData: result2
                        });
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
exports.viewUserDetails = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Matron") {
            db.query('select * from users where username=?', req.session.user, (err, result) => {
                if (err) {
                    res.render('./layouts/errorpage', {
                        error: err,
                        redirect: "Go back",
                        redirectLink: "/matron"
                    })
                } else {
                    res.render('./layouts/matronUserDetails', {
                        link1: "Review allocations",
                        link1Href: "/matron",
                        link2: "Allocated Rooms",
                        link2Href: "/matron/occupiedrooms",
                        link3Href: "/matron/userdetails",
                        sampleData: result
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
exports.allocateRoom = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Matron") {
            var id = req.params.id;
            var roomNo = req.body.RoomNo;
            let params = {
                RoomNo: roomNo
            }
            db.query('Update applications set? where ApplicationNo=?', [params, id], (err, result) => {
                if (err) {
                    res.render('./layouts/errorpage', {
                        error: err,
                        redirect: "Go back",
                        redirectLink: "/matron"
                    })
                } else {
                    db.query('select * from applications where Status = "Accepted"', (err, result) => {
                        if (err) {
                            throw err
                        } else {
                            res.render('./layouts/matronDashboard', {
                                link1: "Review Allocations",
                                link1Href: "/matron",
                                link2: "Allocated Rooms",
                                link2Href: "/matron/occupiedrooms",
                                link3Href: "/matron/userdetails",
                                sampleData: result,
                            })
                        }
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
exports.viewAllocatedRooms = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Matron") {
            db.query('select RegistrationNo, RoomNo from applications where RoomNo is not null', (err, result) => {
                if (err) {
                    res.render('./layouts/errorpage', {
                        error: err,
                        redirect: "Go back",
                        redirectLink: "/matron"
                    })
                } else {
                    res.render('./layouts/allocatedRooms', {
                        link1: "Review Allocations",
                        link1Href: "/matron",
                        link2: "Allocated Rooms",
                        link2Href: "/matron/occupiedrooms",
                        link3Href: "/matron/userdetails",
                        sampleData: result,
                    })
                }
            })
        } else {
            res.render('./layouts/unauthorizedAccess');
        }
    } else {
        res.redirect('/login');
    }
}