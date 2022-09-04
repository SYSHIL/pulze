const USER = require('./../models/userModel')
const PATIENT = require('./../models/patientModel')

module.exports.getUserHome = async (req, res) => {
    try {
        if(req.session.loggedin) {

            const user = await USER.findOne({email: req.session.username});
            // console.log(user)
            const patients = await PATIENT.find({assignedTo: req.session.username});

            res.render('pages/userPage.ejs', {
                user: user,
                patients: patients
            })
        }
        else res.redirect('/login');
    } catch (err) {
        res.json({})
    }
}

module.exports.getPatient = async (req, res) => {

    const patient = await PATIENT.findById(req.params.id);

    res.render('pages/patient.ejs', {
        patient: patient
    });
}