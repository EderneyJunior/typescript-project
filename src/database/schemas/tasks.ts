export const taskStatus = [
    "pending",
    "progress",
    "completed"
] as const

export type TaskStatus = typeof taskStatus[number]

export interface TaskSchema {
    id: string,
    name: string,
    status: TaskStatus,
    createdAt: string,
}

export type CreateTaskSchema = Omit<TaskSchema, "id" | "status" | "createdAt">
export type UpdateTaskSchema = Partial<Omit<TaskSchema, "id" | "createdAt">>