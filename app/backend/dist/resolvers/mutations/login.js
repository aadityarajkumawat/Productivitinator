"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const argon2 = __importStar(require("argon2"));
async function login(_, args, { request, prisma }) {
    const { password, username } = args;
    try {
        let user = await prisma.user.findFirst({
            where: { username },
        });
        if (!user) {
            return { user: null, error: 'User does not exist' };
        }
        else {
            let isPasswordValid = await argon2.verify(user.password, password);
            if (isPasswordValid) {
                request.session.userId = user.userId;
                console.log('logged');
                return { user, error: null };
            }
            else {
                return { user: null, error: 'Wrong Password' };
            }
        }
    }
    catch (e) {
        console.log(e.message);
        return { user: null, error: e.message };
    }
}
exports.login = login;
//# sourceMappingURL=login.js.map