import { PrismaClient, Prisma, User } from '@prisma/client'

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
