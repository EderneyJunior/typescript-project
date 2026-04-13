export function notFoundTesk(id, res) {
    return res.status(404).send({
        message: `Task with id ${id} not found`
    });
}
