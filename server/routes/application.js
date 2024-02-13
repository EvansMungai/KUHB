module.exports = (app) => {
    app.get('/application', (req, res) => {
        res.render('./layouts/application');
    })
}