import {
    CollegeTasksInput,
    GetSubjectResponse,
    ResolverContext,
} from 'src/types'

export async function getSubject(
    _: any,
    args: CollegeTasksInput,
    { request, prisma }: ResolverContext,
): Promise<GetSubjectResponse> {
    if (!request.session.userId)
        return { subject: null, error: 'You are not authenticated' }

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
