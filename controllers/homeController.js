exports.getHomePage = (req, res) => {
    res.render('pages/home.ejs');
}

exports.getAboutPage = (req, res) => {
    res.render('pages/about.ejs')
}