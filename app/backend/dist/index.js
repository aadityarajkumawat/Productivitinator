"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv-safe/config");
const graphql_yoga_1 = require("graphql-yoga");
const path_1 = __importDefault(require("path"));
const client_1 = require("@prisma/client");
const session_1 = require("./middlewares/session");
const resolvers_1 = __importDefault(require("./resolvers"));
async function main() {
    let prisma = new client_1.PrismaClient();
    let typeDefs = path_1.default.join(__dirname, 'graphql/typeDefs.graphql');
    let server = new graphql_yoga_1.GraphQLServer({
        typeDefs,
        resolvers: resolvers_1.default,
        context: (options) => (Object.assign(Object.assign({}, options), { prisma })),
    });
    server.express.use(session_1.sessionMiddleware(process.env.COOKIE_SECRET));
    server.start({
        cors: {
            origin: [
                'http://localhost:3000',
                'https://productivitinator.vercel.app',
            ],
            credentials: true,
        },
        port: process.env.PORT,
    }, (options) => {
        console.log(`Server is running at port ${options.port}`);
    });
}
main().catch((e) => console.log(e.message));
//# sourceMappingURL=index.js.map