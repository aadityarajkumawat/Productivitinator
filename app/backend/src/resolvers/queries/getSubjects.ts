import { GetSubjectsResponse, ResolverContext } from 'src/types'

export async function getSubjects(
    _: any,
    __: any,
    { prisma }: ResolverContext,
): Promise<GetSubjectsResponse> {
    try {
        let subjects = await prisma.subject.findMany({
            where: {
                userId: 1,
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
