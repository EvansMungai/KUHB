module.exports = (app) => {
    app.get('/student/application', (req, res) => {
        res.render('./layouts/application');
    })
}