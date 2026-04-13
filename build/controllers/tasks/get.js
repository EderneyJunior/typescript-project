import { tasksServices } from '#services/tasks.js';
import { notFoundTesk } from './helpers.js';
export async function getAllTaskController(req, res) {
    const tasks = await tasksServices.getAll();
    return res.status(200).send({
        message: `Tasks: ${tasks.length}`,
        tasks
    });
}
export async function getByIdTaskController(req, res) {
    const { id } = req.params;
    const task = await tasksServices.getById(id);
    if (!task) {
        return notFoundTesk(id, res);
    }
    return res.status(200).send({
        message: "Task succesfully found",
        task
    });
}
