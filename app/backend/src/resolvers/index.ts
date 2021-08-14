import { addSubject } from './mutations/addSubject'
import { login } from './mutations/login'
import { register } from './mutations/register'
import { getSubjects } from './queries/getSubjects'
import { getUser } from './queries/getUser'

export interface ResolversI {
    Query: {
        getSubjects: typeof getSubjects
        getUser: typeof getUser
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
        getUser,
    },
    Mutation: {
        register,
        login,
        addSubject,
    },
}

export default Resolvers
