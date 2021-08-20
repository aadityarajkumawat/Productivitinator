import { GetTaskMarkedResponse, ResolverContext } from '../../types'

export async function getTask(
    _: any,
    args: { taskId: number },
    { prisma }: ResolverContext,
): Promise<GetTaskMarkedResponse> {
    try {
        let task = await prisma.collegeTask.findFirst({
            where: { taskId: args.taskId },
            orderBy: { createdAt: 'asc' },
        })
        if (!task) return { task: null, error: 'Error fetching task' }
        return { task, error: null }
        // return delay({ tasks, error: null })
    } catch (e) {
        console.log(e.message)
        return { task: null, error: e.message }
    }
}
