import 'dotenv-safe/config'
import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import { sessionMiddleware } from './middlewares/session'
import Resolvers from './resolvers'

async function main() {
    let prisma = new PrismaClient()
    let typeDefs = path.join(__dirname, 'graphql/typeDefs.graphql')
    let server = new GraphQLServer({
        typeDefs,
        resolvers: Resolvers as any,
        context: (options) => ({ ...options, prisma }),
    })

    server.express.use(sessionMiddleware(process.env.COOKIE_SECRET as string))
    server.start(
        { cors: { origin: '*', credentials: true }, port: process.env.PORT },
        (options) => {
            console.log(`Server is running at port ${options.port}`)
        },
    )
}

main().catch((e) => console.log(e.message))
