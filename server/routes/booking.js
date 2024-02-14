module.exports = (app)=>{
    app.get('/student/booking', (req, res) => {
        res.render('./layouts/booking');
    })
}