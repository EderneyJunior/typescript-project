import { tasksServices } from "#services/tasks.js";
import { notFoundTesk } from "./helpers.js";
export async function deleteTaskController(req, res) {
    const { id } = req.params;
    const task = await tasksServices.delete(id);
    if (!task) {
        return notFoundTesk(id, res);
    }
    return res.status(200).send({
        message: "Task delete succesfully",
    });
}
