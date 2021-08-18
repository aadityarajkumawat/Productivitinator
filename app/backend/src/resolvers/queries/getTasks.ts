import {
    CollegeTasksInput,
    GetCollegeTasksResponse,
    ResolverContext,
} from '../../types'

export async function getTasks(
    _: any,
    args: CollegeTasksInput,
    { request, prisma }: ResolverContext,
): Promise<GetCollegeTasksResponse> {
    if (!request.session.userId)
        return { tasks: null, error: 'You are not authenticated' }

    try {
        let tasks = await prisma.collegeTask.findMany({
            where: { subjectId: args.subjectId },
            orderBy: { createdAt: 'asc' },
        })
        if (!tasks) return { tasks: null, error: 'Error fetching tasks' }
        return { tasks, error: null }
        // return delay({ tasks, error: null })
    } catch (e) {
        console.log(e.message)
        return { tasks: null, error: e.message }
    }
}
