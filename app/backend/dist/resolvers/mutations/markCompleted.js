"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markTask = void 0;
async function markTask(_, args, { prisma }) {
    const { taskId } = args;
    try {
        let task = await prisma.collegeTask.findFirst({ where: { taskId } });
        if (!task)
            return { task: null, error: 'Error updaing task' };
        let markedTask = await prisma.collegeTask.update({
            where: { taskId },
            data: {
                completed: !task.completed,
            },
        });
        if (!markedTask) {
            return { task: null, error: 'Error updaing task' };
        }
        return { task: markedTask, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { task: null, error: e.message };
    }
}
exports.markTask = markTask;
//# sourceMappingURL=markCompleted.js.map