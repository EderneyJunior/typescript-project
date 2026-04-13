import { tasksServices } from "#services/tasks.js";
import { z } from "zod";
const schema = z.object({
    name: z.string().min(3),
    status: z.enum(["pending", "progress", "completed"]).optional()
});
export async function createTaskController(req, res) {
    const data = schema.parse(req.body);
    const task = await tasksServices.create(data);
    return res.status(201).send({
        message: "Task created succesfully",
        task
    });
}
