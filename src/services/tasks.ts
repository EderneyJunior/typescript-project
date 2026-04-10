import { db } from "#database/index.js"
import type { CreateTaskSchema } from "#schemas/tasks.js"

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