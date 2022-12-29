const Tasks = require('./../models/taskModal');

module.exports.addTask = async (req, res, next) => {
    try {
        const task = req.body;

        const result = await Tasks.create(task);
        return res.send({ status: true });

    }
    catch (err) {
        next(err);
        console.log(err);
    }
};

module.exports.myTask = async (req, res, next) => {
    try {

        const email = req.query.email;
        const query = { email: email };
        const allTasks = await Tasks.find(query);
        const filter = allTasks.filter(task => !task.complete === true);
        return res.send(filter);

    }
    catch (err) {
        next(err);
        console.log(err);
    }
};

module.exports.completeTask = async (req, res, next) => {
    try {

        const id = req.params.id;
        const result = await Tasks.findByIdAndUpdate(id, {
            complete: true,
        });

        return res.send({ isComplete: result.complete });

    }
    catch (err) {
        next(err);
        console.log(err);
    }
};

module.exports.deleteTask = async (req, res, next) => {
    try {

        const id = req.params.id;

        const result = await Tasks.deleteOne({ _id: id });

        return res.send({ delete: true });

    }
    catch (err) {
        next(err);
        console.log(err);
    }
};