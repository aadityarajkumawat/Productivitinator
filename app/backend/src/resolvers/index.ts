import { register } from './mutations/register'
import { login } from './mutations/login'

export interface ResolversI {
    Query: {}
    Mutation: {
        register: typeof register
        login: typeof login
    }
}

let Resolvers: ResolversI = {
    Query: {},
    Mutation: {
        register,
        login,
    },
}

export default Resolvers
