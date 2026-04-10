import { FastifyInstance } from 'fastify';
import { DefineRouteHandlers } from '#settings/types.js'

export function defineRoutes(handler: DefineRouteHandlers) {
    return function(app: FastifyInstance, _: {}, done:() => void) {
        handler(app)
        done()
    }
}