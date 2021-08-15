import { GetSubjectsResponse, ResolverContext } from 'src/types'

export async function getTasks(
    _: any,
    __: any,
    { request, prisma }: ResolverContext,
): Promise<GetSubjectsResponse> {
    if (!request.session.userId)
        return { subjects: null, error: 'You are not authenticated' }

    try {
        let subjects = await prisma.subject.findMany({
            where: {
                userId: request.session.userId,
            },
        })
        if (!subjects)
            return { subjects: null, error: 'Error fetching subjects' }
        return { subjects, error: null }
    } catch (e) {
        console.log(e.message)
        return { subjects: null, error: e.message }
    }
}
