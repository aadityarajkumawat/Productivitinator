import { GetSemesterResponse, ResolverContext } from 'src/types'

export async function getSemester(
    _: any,
    __: any,
    { prisma }: ResolverContext,
): Promise<GetSemesterResponse> {
    try {
        let semester = await prisma.semester.findFirst({
            where: { userId: 1 },
        })
        return { semester, error: null }
    } catch (e) {
        console.log(e.message)
        return { semester: null, error: e.message }
    }
}
