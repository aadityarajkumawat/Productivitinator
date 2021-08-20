import { GetUserResponse, ResolverContext } from 'src/types'

export async function getUser(
    _: any,
    __: any,
    { prisma }: ResolverContext,
): Promise<GetUserResponse> {
    try {
        let user = await prisma.user.findFirst({
            where: { userId: 1 },
        })
        return { user, error: null }
    } catch (e) {
        console.log(e.message)
        return { user: null, error: e.message }
    }
}
