"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubject = void 0;
async function addSubject(_, args, { prisma }) {
    try {
        let subject = await prisma.subject.create({
            data: Object.assign(Object.assign({}, args), { user: {
                    connect: {
                        userId: 1,
                    },
                } }),
        });
        if (!subject)
            return { subject: null, error: 'Error adding subject' };
        return { subject: subject, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { subject: null, error: e.message };
    }
}
exports.addSubject = addSubject;
//# sourceMappingURL=addSubject.js.map