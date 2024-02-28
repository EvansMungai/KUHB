const db = require('../config/database');
exports.homepage = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Student") {
            db.query('select * from students', (err, result) => {
                if (err) {
                    return err;
                } else {
                    res.render('./layouts/studentdashboard', {
                        sampleData: result,
                    })
                }
            })
        } else {
            res.redirect('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login');
    }
}
exports.application = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Student") {
            db.query('select hostels.HostelNo, hostels.HostelName, hostels.Capacity, hostels.Type, rooms.RoomNo from hostels left join rooms on hostels.HostelNo = rooms.HostelNo', (err, result) => {
                if (err) {
                    return err;
                } else {
                    res.render('./layouts/application', {
                        sampleData: result,
                    })
                }
            })
        } else {
            res.redirect('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login');
    }
}
exports.sendApplication = async (req, res) => {
    if (req.session.user) {
        if (req.sesssion.role === "Student") {
            var registrationNo = req.body.RegNo;
            var applicationPeriod = req.body.ApplicationPeriod;
            var preferredHostel = req.body.hostelName;
            var disabled = req.body.isDisabled;
            var disabilityDetails = req.body.DisabilityDetails;
            var accommodationBefore = req.body.accommodationBefore;
            var accommodationPeriod = req.body.AccommodationPeriod;
            var sponsored = req.body.IsSponsored;
            var sponsor = req.body.sponsor;
            var receivesHelb = req.body.ReceivesHelb;
            var helbAmount = req.body.HelbAmount;
            var receivedBursary = req.body.ReceivedBursary;
            var bursaryAmount = req.body.BursaryAmount;
            var workStudyBenefitsBefore = req.body.WorkStudyBenefitsBefore;
            var workStudyPeriod = req.body.WorkStudyPeriod;
            var specialExamsOnFinancialGrounds = req.body.deferred;
            var specialExamsPeriod = req.body.SpecialExamPeriod;
            var reasonsForConsideration = req.body.ReasonsForConsideration;
            let params = {
                ApplicationPeriod: applicationPeriod,
                RegistrationNo: registrationNo,
                PreferredHostel: preferredHostel,
                Disability: disabled,
                DisabilityDetails: disabilityDetails,
                AccommodatedBefore: accommodationBefore,
                AccommodationPeriod: accommodationPeriod,
                IsSponsored: sponsored,
                Sponsor: sponsor,
                ReceivesHelb: receivesHelb,
                HelbAmount: helbAmount,
                ReceivedBursary: receivedBursary,
                BursaryAmount: bursaryAmount,
                WorkStudyBenefitsBefore: workStudyBenefitsBefore,
                WorkStudyPeriod: workStudyPeriod,
                SpecialExamsOnFinancialGrounds: specialExamsOnFinancialGrounds,
                SpecialExamPeriod: specialExamsPeriod,
                ReasonsForConsideration: reasonsForConsideration
            }
            db.query('insert into applications set?', params, (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/student')
                }
            })
        } else {
            res.render("./layouts/unauthorizedAccess");
        }
    } else {
        res.redirect('/login');
    }
}
exports.applicationDetails = async (req, res) => {
    if (req.sesssion.user) {
        if (req.session.role === "Student") {
            db.query('select * from applications', (err, result) => {
                if (err) {
                    return err;
                } else {
                    res.render('./layouts/studentApplicationDetails', {
                        sampleData: result
                    })
                }
            })
        } else {
            res.redirect('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login');
    }
}
exports.accommodationDetails = async (req, res) => {
    if (req.session.user) {
        if (req.session.role === "Student") {
            db.query('select * from applications where status = "Accepted"', (err, result) => {
                if (err) {
                    return err;
                } else {
                    res.render('./layouts/studentAccommodationDetails', {
                        sampleData: result
                    })
                }
            })
        } else {
            res.redirect('./layouts/unauthorizedAccess')
        }
    } else {
        res.redirect('/login')
    }
}