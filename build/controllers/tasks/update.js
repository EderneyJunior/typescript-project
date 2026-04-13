import { taskStatus } from "#schemas/tasks.js";
import { z } from "zod";
import { tasksServices } from "#services/tasks.js";
import { notFoundTesk } from "./helpers.js";
const schema = z.object({
    name: z.string().min(3).optional(),
    status: z.enum(taskStatus).optional()
}).refine(({ name, status }) => {
    name !== undefined || status !== undefined;
}, {
    message: "At least one of the fields (name or status) must be provided"
});
export async function updateTaskController(req, res) {
    const { id } = req.params;
    const task = schema.parse(req.body);
    if (!task) {
        return notFoundTesk(id, res);
    }
    const updatedTask = await tasksServices.update(id, task);
    return res.status(200).send({
        message: "Task updated succesfully",
        updatedTask
    });
}
