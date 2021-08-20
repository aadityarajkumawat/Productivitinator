import {
    CollegeTasksInput,
    GetCollegeTasksResponse,
    ResolverContext,
} from '../../types'

export async function getTasks(
    _: any,
    args: CollegeTasksInput,
    { prisma }: ResolverContext,
): Promise<GetCollegeTasksResponse> {
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
