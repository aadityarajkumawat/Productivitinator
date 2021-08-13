import { AuthResponse, RegisterInput, ResolverContext } from '../../types'
import * as argon2 from 'argon2'

export async function register(
    _: any,
    args: RegisterInput,
    { request, prisma }: ResolverContext,
): Promise<AuthResponse> {
    const { password, username, name } = args
    try {
        let user = await prisma.user.findFirst({ where: { username } })
        if (user) return { user: null, error: 'User already exists' }
        let hashedPassword = await argon2.hash(password)
        user = await prisma.user.create({
            data: { name, username, password: hashedPassword },
        })
        if (!user) return { user: null, error: 'Error creating your account' }
        request.session.userId = user.userId
        return { user, error: null }
    } catch (e) {
        console.log(e.message)
        return { user: null, error: e.message }
    }
}
