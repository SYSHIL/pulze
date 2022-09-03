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