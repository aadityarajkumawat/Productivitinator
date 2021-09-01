"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = void 0;
async function getTask(_, args, { prisma }) {
    try {
        let task = await prisma.collegeTask.findFirst({
            where: { taskId: args.taskId },
            orderBy: { createdAt: 'asc' },
        });
        if (!task)
            return { task: null, error: 'Error fetching task' };
        return { task, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { task: null, error: e.message };
    }
}
exports.getTask = getTask;
//# sourceMappingURL=getTask.js.map