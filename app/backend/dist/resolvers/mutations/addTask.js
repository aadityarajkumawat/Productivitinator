"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = void 0;
async function addTask(_, args, { prisma }) {
    try {
        let { taskName, lastDate, subjectId, timeAssigned, comment } = args;
        let collegeTask = await prisma.collegeTask.create({
            data: {
                taskName,
                completed: false,
                lastDate: lastDate.toDate(),
                timeAssigned: timeAssigned.toDate(),
                subject: { connect: { subjectId } },
                comment,
            },
        });
        if (!collegeTask)
            return { task: null, error: 'Error creating task' };
        return {
            task: collegeTask,
            error: null,
        };
    }
    catch (e) {
        console.log(e.message);
        return { task: null, error: e.message };
    }
}
exports.addTask = addTask;
//# sourceMappingURL=addTask.js.map