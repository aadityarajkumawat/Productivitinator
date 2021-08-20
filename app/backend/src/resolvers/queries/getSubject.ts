import {
    CollegeTasksInput,
    GetSubjectResponse,
    ResolverContext,
} from 'src/types'

export async function getSubject(
    _: any,
    args: CollegeTasksInput,
    { prisma }: ResolverContext,
): Promise<GetSubjectResponse> {
    try {
        let subjectId = args.subjectId
        let subject = await prisma.subject.findFirst({
            where: { subjectId },
        })
        return { subject, error: null }
    } catch (e) {
        console.log(e.message)
        return { subject: null, error: e.message }
    }
}
