const tasks = require('./../models/taskModal');

module.exports.addTask = async (req, res, next) => {
    try {
        const task = req.body;

        const result = await tasks.create(task);
        return res.send({ status: true });

    }
    catch (err) {
        next(err);
        console.log(err);
    }
};