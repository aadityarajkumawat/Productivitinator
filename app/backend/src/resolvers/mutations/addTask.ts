import { AddTaskInput, AddTaskResponse, ResolverContext } from 'src/types'

export async function addTask(
    _: any,
    args: AddTaskInput,
    { prisma }: ResolverContext,
): Promise<AddTaskResponse> {
    try {
        let { taskName, lastDate, subjectId, timeAssigned, comment } = args
        let collegeTask = await prisma.collegeTask.create({
            data: {
                taskName,
                completed: false,
                lastDate: lastDate.toDate(),
                timeAssigned: timeAssigned.toDate(),
                subject: { connect: { subjectId } },
                comment,
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
