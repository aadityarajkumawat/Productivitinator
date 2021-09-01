"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubjects = void 0;
async function getSubjects(_, __, { request, prisma }) {
    try {
        let subjects = await prisma.subject.findMany({
            where: {
                userId: request.session.userId,
            },
        });
        if (!subjects)
            return { subjects: null, error: 'Error fetching subjects' };
        return { subjects, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { subjects: null, error: e.message };
    }
}
exports.getSubjects = getSubjects;
//# sourceMappingURL=getSubjects.js.map