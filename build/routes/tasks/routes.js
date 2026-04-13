import { defineRoutes } from "#functions/utils.js";
import { createTaskController } from "#controllers/tasks/create.js";
import { getAllTaskController, getByIdTaskController } from "#controllers/tasks/get.js";
import { updateTaskController } from "#controllers/tasks/update.js";
import { deleteTaskController } from "#controllers/tasks/delete.js";
export default defineRoutes(app => {
    app.get("/", getAllTaskController);
    app.get("/:id", getByIdTaskController);
    app.post("/", createTaskController);
    app.put("/:id", updateTaskController);
    app.delete("/:id", deleteTaskController);
});
