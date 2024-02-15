const db = require('../config/database');
exports.showSuccessfulApplications = async (req, res) => {
    db.query('select * from applications where status = "Accepted"', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/matronDashboard', {
                link1: "Successful Applications",
                link1Href: "/matron",
                link2: "Allocate Rooms",
                link2Href: "/matron/allocaterooms",
                sampleData: result,
            })
        }
    })
}
exports.allocateRooms = async (req, res) => {
    db.query('select * from applications where status = "Accepted"', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/matronAllocateRooms', {
                link1: "Successful Applications",
                link1Href: "/matron",
                link2: "Allocate Rooms",
                link2Href: "/matron/allocaterooms",
                sampleData: result,
            })
        }
    })
}