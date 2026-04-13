import { db } from "#database/index.js";
async function existis(id) {
    return await db.tasks.has(id);
}
async function getTaskBtId(id) {
    return await db.tasks.get(id);
}
async function getAllTasks() {
    const data = await db.tasks.all();
    return data.map(({ value }) => value);
}
async function createTask(data) {
    const createdAt = new Date();
    const id = createdAt.getTime().toString();
    const status = "pending";
    return await db.tasks.set(id, {
        ...data, id, status, createdAt
    });
}
async function updateTask(id, data) {
    const task = await getTaskBtId(id);
    return await db.tasks.set(id, {
        ...task, ...data
    });
}
async function deletetask(id) {
    return await db.tasks.delete(id);
}
export const tasksServices = {
    existis,
    getById: getTaskBtId,
    getAll: getAllTasks,
    create: createTask,
    update: updateTask,
    delete: deletetask
};
