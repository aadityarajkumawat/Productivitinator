// import { User } from '@prisma/client'
// import { LoginInput, ResolverContext } from 'src/types'

// function login(
//     _: any,
//     args: LoginInput,
//     { request, prisma }: ResolverContext,
// ): Promise<User> {
//     const { password, username } = args
//     try {
//         let user = prisma.user.findFirst({ select: { username } })
//     } catch (e) {
//         console.log(e.message)
//         return {}
//     }
// }
