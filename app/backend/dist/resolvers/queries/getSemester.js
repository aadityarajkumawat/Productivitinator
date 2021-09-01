"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSemester = void 0;
async function getSemester(_, __, { request, prisma }) {
    try {
        let semester = await prisma.semester.findFirst({
            where: { userId: request.session.userId },
        });
        return { semester, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { semester: null, error: e.message };
    }
}
exports.getSemester = getSemester;
//# sourceMappingURL=getSemester.js.map