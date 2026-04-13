import { FastifyReply } from 'fastify';

export function notFoundTesk(id: string, res: FastifyReply) {
    return res.status(404).send({
        message: `Task with id ${id} not found`
    })
}