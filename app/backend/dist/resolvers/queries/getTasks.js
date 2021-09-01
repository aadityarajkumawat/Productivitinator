"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasks = void 0;
async function getTasks(_, args, { prisma }) {
    try {
        let tasks = await prisma.collegeTask.findMany({
            where: { subjectId: args.subjectId },
            orderBy: { createdAt: 'asc' },
        });
        if (!tasks)
            return { tasks: null, error: 'Error fetching tasks' };
        return { tasks, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { tasks: null, error: e.message };
    }
}
exports.getTasks = getTasks;
//# sourceMappingURL=getTasks.js.map