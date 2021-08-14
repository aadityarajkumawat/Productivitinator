import { GetUserResponse, ResolverContext } from 'src/types'

export async function getUser(
    _: any,
    __: any,
    { request, prisma }: ResolverContext,
): Promise<GetUserResponse> {
    if (!request.session.userId)
        return { user: null, error: 'You are not authenticated' }

    try {
        let user = await prisma.user.findFirst({
            where: { userId: request.session.userId },
        })
        return { user, error: null }
    } catch (e) {
        console.log(e.message)
        return { user: null, error: e.message }
    }
}
