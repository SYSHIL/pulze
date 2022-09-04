const argon = require('argon2')

exports.hash = async (pass) => await argon.hash(pass);

exports.validate = async (hashedVal, pass) => await argon.verify(hashedVal, pass);