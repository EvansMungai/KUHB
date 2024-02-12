const db = require('../config/database');
db.query("select * from hostels", (err, result, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})