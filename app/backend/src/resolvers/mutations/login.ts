import * as argon2 from 'argon2'
import { AuthResponse, LoginInput, ResolverContext } from '../../types'

export async function login(
    _: any,
    args: LoginInput,
    { request, prisma }: ResolverContext,
): Promise<AuthResponse> {
    const { password, username } = args
    try {
        let user = await prisma.user.findFirst({
            where: { username },
        })
        if (!user) {
            return { user: null, error: 'User does not exist' }
        } else {
            let isPasswordValid = await argon2.verify(user.password, password)
            if (isPasswordValid) {
                request.session.userId = user.userId
                console.log('logged')
                return { user, error: null }
            } else {
                return { user: null, error: 'Wrong Password' }
            }
        }
    } catch (e) {
        console.log(e.message)
        return { user: null, error: e.message }
    }
}
