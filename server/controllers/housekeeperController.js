const db = require('../config/database');
exports.showRooms = async (req, res)=>{
    db.query('select * from rooms', (err, result)=>{
        if (err) {
            throw err;
        } else {
            res.render('./layouts/studentdashboard', {
                sampleData: result,
            })
        }
    })
}