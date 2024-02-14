const db = require('../config/database');

exports.showApplications = async (req, res) => {
    db.query('select * from applications', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/housekeeperDashboard', {
                link1: "Review applications",
                link1Href: "/housekeeper",
                link2: "Successful Applications",
                link2Href: "/housekeeper/successfulapplications",
                sampleData: result,
            })
        }
    })
}
exports.showSuccessfulApplications = async (req, res) => {
    db.query('select * from applications where Status = "Accepted"', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/housekeeperDashboard', {
                link1: "Review applications",
                link1Href: "/housekeeper",
                link2: "Successful Applications",
                link2Href: "/housekeeper/successfulapplications",
                sampleData: result,
            })
        }
    })
}