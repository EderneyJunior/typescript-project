import { FastifyRequest, FastifyReply } from 'fastify';
import { tasksServices } from '#services/tasks.js';
import { notFoundTesk } from './helpers.js';

export async function getAllTaskController(req: FastifyRequest, res: FastifyReply) {
	const tasks = await tasksServices.getAll();
    return res.status(200).send({
        message: `Tasks: ${tasks.length}`,
        tasks
    })
}

export interface GetByIdRoute {
    param: {
        id: string
    }
}

export async function getByIdTaskController(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.params as GetByIdRoute['param']
    const task = await tasksServices.getById(id)
    if (!task) {
        return notFoundTesk(id, res)
    }
    return res.status(200).send({
        message: "Task succesfully found",
        task
    })
}   