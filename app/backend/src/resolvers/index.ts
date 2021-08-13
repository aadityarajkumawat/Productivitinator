import { register } from './mutations/register'
import { login } from './mutations/login'
import { addSubject } from './mutations/addSubject'

export interface ResolversI {
    Query: {}
    Mutation: {
        register: typeof register
        login: typeof login
        addSubject: typeof addSubject
    }
}

let Resolvers: ResolversI = {
    Query: {},
    Mutation: {
        register,
        login,
        addSubject,
    },
}

export default Resolvers
