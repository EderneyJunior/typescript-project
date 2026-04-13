import { db } from "#database/index.js"
import type { CreateTaskSchema, UpdateTaskSchema } from "#schemas/tasks.js"

async function existis(id: string) {
    return await db.tasks.has(id)
}

async function getTaskBtId(id: string) {
    return await db.tasks.get(id)
}

async function getAllTasks() {
    const data = await db.tasks.all()
    return data.map(({value}) => value)
}

async function createTask(data: CreateTaskSchema) {
    const createdAt = new Date()
    const id = createdAt.getTime().toString()
    const status = "pending"
    
    return await db.tasks.set(id, {
        ...data, id, status, createdAt
    })
}

async function updateTask(id: string, data: UpdateTaskSchema) {
    const task = await getTaskBtId(id)
    return await db.tasks.set(id, {
        ...task, ...data
    })
}

async function deletetask(id: string) {
    return await db.tasks.delete(id)
}

export const tasksServices = {
    existis,
    getById: getTaskBtId,
    getAll: getAllTasks,
    create: createTask,
    update: updateTask,
    delete: deletetask
}