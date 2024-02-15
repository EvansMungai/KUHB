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
exports.viewApplications = async (req, res)=>{
    var id = req.params.id;
    db.query('select * from applications where ApplicationNo=?;',id, (err, result)=>{
        if (err) {
            throw err
        } else {
            res.render('./layouts/housekeeperReviewApplications.ejs', {
                link1: "Review applications",
                link1Href: "/housekeeper",
                link2: "Successful Applications",
                link2Href: "/housekeeper/successfulapplications",
                sampleData: result,
            });
        }
    })
}
exports.reviewApplictions = async (req, res)=>{
    var status = req.body.Status;
    var id = req.params.appNo;
    let params = {
        Status: status
    }
    db.query('Update applications set? where ApplicationNo=?',[params, id], (err, result)=>{
        if (err) {
            throw err
        } else {
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
    })
}
exports.showSuccessfulApplications = async (req, res) => {
    db.query('select * from applications where Status = "Accepted"', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/housekeeperSuccessfulApplications', {
                link1: "Review applications",
                link1Href: "/housekeeper",
                link2: "Successful Applications",
                link2Href: "/housekeeper/successfulapplications",
                sampleData: result,
            })
        }
    })
}