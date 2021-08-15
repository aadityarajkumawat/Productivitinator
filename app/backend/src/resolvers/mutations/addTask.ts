import { AddTaskInput, AddTaskResponse, ResolverContext } from 'src/types'

export async function addTask(
    _: any,
    args: AddTaskInput,
    { request, prisma }: ResolverContext,
): Promise<AddTaskResponse> {
    if (!request.session.userId)
        return { task: null, error: 'You are not authenticated' }

    try {
        let { taskName, lastDate, subjectId, timeAssigned } = args
        let collegeTask = await prisma.collegeTask.create({
            data: {
                taskName,
                completed: false,
                lastDate: lastDate.toDate(),
                timeAssigned: timeAssigned.toDate(),
                subject: { connect: { subjectId } },
            },
        })
        if (!collegeTask) return { task: null, error: 'Error creating task' }
        return {
            task: collegeTask,
            error: null,
        }
    } catch (e) {
        console.log(e.message)
        return { task: null, error: e.message }
    }
}
