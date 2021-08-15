import {
    PrismaClient,
    Prisma,
    User,
    Subject,
    Semester,
    CollegeTask,
} from '@prisma/client'
import dayjs from 'dayjs'

export interface ResolverContext {
    request: Express.Request & { session: { userId: number } }
    response: Express.Response
    prisma: PrismaClient<
        Prisma.PrismaClientOptions,
        never,
        Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
    >
}

export interface LoginInput {
    username: string
    password: string
}

export interface RegisterInput {
    name: string
    username: string
    password: string
}
export interface AuthResponse {
    user: Omit<User, 'password'> | null
    error: string | null
}

export interface AddSubjectInput {
    subjectName: string
    instructor: string
    credits: number
    semester: number
}

export interface AddSubjectResponse {
    subject: Subject | null
    error: string | null
}

export interface GetSubjectResponse {
    subject: Subject | null
    error: string | null
}

export interface GetSubjectsResponse {
    subjects: Array<Subject> | null
    error: string | null
}

export interface GetUserResponse {
    user: Omit<User, 'password' | 'createdAt'> | null
    error: string | null
}

export interface CreateSemesterInput {
    semester: number
    semesterEnd: dayjs.Dayjs
}

export interface CreateSemesterResponse {
    semester: Semester | null
    error: string | null
}

export interface GetSemesterResponse {
    semester: Semester | null
    error: string | null
}

export type AddTaskInput = {
    taskId: number
    subjectId: number
    createdAt: Date
    taskName: string
    timeAssigned: dayjs.Dayjs
    lastDate: dayjs.Dayjs
    completed: boolean
    comment: string
}

export interface AddTaskResponse {
    task: CollegeTask | null
    error: string | null
}

export interface CollegeTasksInput {
    subjectId: number
}

export interface GetCollegeTasksResponse {
    tasks: Array<CollegeTask> | null
    error: string | null
}

export interface GetDeleteTaskResponse {
    task: CollegeTask | null
    error: string | null
}
