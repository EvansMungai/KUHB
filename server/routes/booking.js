module.exports = (app)=>{
    app.get('/booking', (req, res) => {
        res.render('./layouts/booking');
    })
}