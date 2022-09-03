module.exports.getAllPatients = async (req, res) => {
    res.render('pages/userPage.ejs');
}

module.exports.getPatient = async (req, res) => {
    res.render('pages/patient.ejs');
}