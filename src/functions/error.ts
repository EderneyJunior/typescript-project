import { FastifyError, FastifyRequest, FastifyReply } from "fastify"
import { ZodError } from "zod"

export async function errorHandler(error: FastifyError, _: FastifyRequest, res: FastifyReply) {
    if(error instanceof ZodError) {
        const errors = error.issues.map(issue => {
            return {
                path: issue.path.join('.'),
                message: issue.message
            }
        })
        return res.status(400).send({
            status: "Validation error",
            errors
        })
    }
}