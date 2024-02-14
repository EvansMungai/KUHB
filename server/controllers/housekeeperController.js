const db = require('../config/database');

exports.showApplications = async (req, res) => {
    db.query('select * from applications', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/housekeeperDashboard', {
                sampleData: result,
            })
        }
    })
}