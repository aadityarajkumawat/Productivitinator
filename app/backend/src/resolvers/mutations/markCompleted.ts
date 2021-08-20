import { GetTaskMarkedResponse, ResolverContext } from '../../types'

export async function markTask(
    _: any,
    args: { taskId: number },
    { request, prisma }: ResolverContext,
): Promise<GetTaskMarkedResponse> {
    if (!request.session.userId) {
        return { task: null, error: 'User not authenticated' }
    }
    const { taskId } = args
    try {
        let task = await prisma.collegeTask.findFirst({ where: { taskId } })
        if (!task) return { task: null, error: 'Error updaing task' }
        let markedTask = await prisma.collegeTask.update({
            where: { taskId },
            data: {
                completed: !task.completed,
            },
        })
        if (!markedTask) {
            return { task: null, error: 'Error updaing task' }
        }
        return { task: markedTask, error: null }
    } catch (e) {
        console.log(e.message)
        return { task: null, error: e.message }
    }
}