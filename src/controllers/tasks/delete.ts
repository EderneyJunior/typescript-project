import { FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RawServerDefault, RouteGenericInterface } from "fastify";
import { tasksServices } from "#services/tasks.js";
import { GetByIdRoute } from "#controllers/tasks/get.js";
import { notFoundTesk } from "./helpers.js";

export async function deleteTaskController(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.params as GetByIdRoute['param']

    const task = await tasksServices.delete(id)
    if (!task) {
            return notFoundTesk(id, res)
        }

    return res.status(200).send({
        message: "Task delete succesfully",
    })
}