import { defineRoutes } from "#functions/utils.js";

export default defineRoutes(app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: 'Hello World!' });
    })
})