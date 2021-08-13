import { PrismaClient, Prisma, User, Subject } from '@prisma/client'

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

export interface GetSubjectsResponse {
    subjects: Array<Subject> | null
    error: string | null
}
