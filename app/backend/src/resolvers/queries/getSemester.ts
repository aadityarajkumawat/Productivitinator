import { GetSemesterResponse, ResolverContext } from 'src/types'

export async function getSemester(
    _: any,
    __: any,
    { request, prisma }: ResolverContext,
): Promise<GetSemesterResponse> {
    if (!request.session.userId)
        return { semester: null, error: 'You are not authenticated' }

    try {
        let semester = await prisma.semester.findFirst({
            where: { userId: request.session.userId },
        })
        return { semester, error: null }
    } catch (e) {
        console.log(e.message)
        return { semester: null, error: e.message }
    }
}
