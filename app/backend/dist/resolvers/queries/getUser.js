"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
async function getUser(_, __, { prisma }) {
    try {
        let user = await prisma.user.findFirst({
            where: { userId: 1 },
        });
        return { user, error: null };
    }
    catch (e) {
        console.log(e.message);
        return { user: null, error: e.message };
    }
}
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map