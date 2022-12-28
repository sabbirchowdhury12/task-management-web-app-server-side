const User = require('../models/userModal');

module.exports.register = async (req, res, next) => {
    try {
        const user = req.body;
        const result = await User.create(user);
        return res.json({ status: true });
    }
    catch (err) {
        next(err);
        console.log(err);
    }
};