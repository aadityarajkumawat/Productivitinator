import { GetDeleteTaskResponse, ResolverContext } from '../../types'

export async function deleteTask(
    _: any,
    args: { taskId: number },
    { request, prisma }: ResolverContext,
): Promise<GetDeleteTaskResponse> {
    if (!request.session.userId) {
        return { task: null, error: 'User not authenticated' }
    }
    const { taskId } = args
    try {
        let deletedTask = await prisma.collegeTask.delete({
            where: { taskId },
        })
        if (!deletedTask) {
            return { task: null, error: 'Task cannot be deleted' }
        }
        return { task: deletedTask, error: null }
    } catch (e) {
        console.log(e.message)
        return { task: null, error: e.message }
    }
}
