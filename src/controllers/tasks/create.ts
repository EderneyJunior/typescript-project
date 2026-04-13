import { tasksServices } from "#services/tasks.js"
import { CreateTaskSchema } from "#schemas/tasks.js"
import {FastifyReply, FastifyRequest } from "fastify"
import { z }  from "zod"

const schema = z.object({
    name: z.string().min(3),
    status: z.enum(["pending", "progress", "completed"]).optional()
}) satisfies z.ZodType<CreateTaskSchema>

export async function createTaskController(req: FastifyRequest, res: FastifyReply) {
    const data = schema.parse(req.body)
    const task = await tasksServices.create(data)
    return res.status(201).send({
        message: "Task created succesfully",
        task
    })
}