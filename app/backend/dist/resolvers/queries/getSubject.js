"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubject = void 0;
async function getSubject(_, args, { prisma }) {
    try {
        let subjectId = args.subjectId;
        let subject = await prisma.subject.findFirst({
            where: { subjectId },
        });
        return { subject, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { subject: null, error: e.message };
    }
}
exports.getSubject = getSubject;
//# sourceMappingURL=getSubject.js.map