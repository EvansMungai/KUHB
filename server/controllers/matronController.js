const db = require('../config/database');
exports.showSuccessfulApplications = async (req, res) => {
    db.query('select * from applications where status = "Successful"', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/matronDashboard', {
                link1: "Successful Applications",
                link2: "Allocate Rooms",
                sampleData: result,
            })
        }
    })
}