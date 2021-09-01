"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
async function deleteTask(_, args, { prisma }) {
    const { taskId } = args;
    try {
        let deletedTask = await prisma.collegeTask.delete({
            where: { taskId },
        });
        if (!deletedTask) {
            return { task: null, error: 'Task cannot be deleted' };
        }
        return { task: deletedTask, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { task: null, error: e.message };
    }
}
exports.deleteTask = deleteTask;
//# sourceMappingURL=deleteTask.js.map