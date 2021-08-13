import { addSubject } from './mutations/addSubject'
import { login } from './mutations/login'
import { register } from './mutations/register'
import { getSubjects } from './queries/getSubjects'

export interface ResolversI {
    Query: {
        getSubjects: typeof getSubjects
    }
    Mutation: {
        register: typeof register
        login: typeof login
        addSubject: typeof addSubject
    }
}

let Resolvers: ResolversI = {
    Query: {
        getSubjects,
    },
    Mutation: {
        register,
        login,
        addSubject,
    },
}

export default Resolvers
