export interface AddSubjectInput {
    subjectName: string
    instructor: string
    credits: number
    semester: number
}

export interface DeleteTaskInput {
    taskId: number
    subjectId: number
}

export interface MarkTaskInput {
    taskId: number
}
