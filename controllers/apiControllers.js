const USER = require('./../models/userModel');

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await USER.find();

        res.status(200).json({
            status: "Success",
            data: {
                users
            }
        })

    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            err
        });
    }
}

module.exports.createUser = async (req, res) => {
    try {

        const newUser = await USER.create(req.body);

        res.status(201).json({
            status: "Success",
            message: "User Created Successfully",
            data: {
                newUser
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            status:"fail",
            message: {
                err
            }
        })
    }
}

module.exports.getUser = async (req, res) => {
    try {

        console.log(req.params.id)
        const user = await USER.findById(req.params.id);
        // req.session.username = user.email;
        // req.session.loggedin = true;
        console.log(req.session)
        res.status(200).json({
            status: "Success",
            data: {
                user
            },
        })

    } catch (err) {
        // console.log(err)
        res.status(404).json({
            status: 'fail',
            data: {
                err
            }
        })
    }
}