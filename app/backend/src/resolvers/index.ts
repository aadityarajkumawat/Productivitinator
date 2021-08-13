import { register } from './mutations/register'

export interface ResolversI {
    Query: {}
    Mutation: {
        register: typeof register
    }
}

let Resolvers: ResolversI = {
    Query: {},
    Mutation: {
        register,
    },
}

export default Resolvers
