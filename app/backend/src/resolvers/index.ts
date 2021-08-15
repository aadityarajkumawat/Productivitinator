import { addSubject } from './mutations/addSubject'
import { login } from './mutations/login'
import { register } from './mutations/register'
import { getSubjects } from './queries/getSubjects'
import { getUser } from './queries/getUser'
import { GraphQLScalarType } from 'graphql'
import dayjs from 'dayjs'
import { formatDate } from '../helpers/formatDate'
import { createSemester } from './mutations/createSemester'
import { getSemester } from './queries/getSemester'

export interface ResolversI {
    Query: {
        getSubjects: typeof getSubjects
        getUser: typeof getUser
        getSemester: typeof getSemester
    }
    Mutation: {
        register: typeof register
        login: typeof login
        addSubject: typeof addSubject
        createSemester: typeof createSemester
    }
    Date: GraphQLScalarType
}

let Resolvers: ResolversI = {
    Query: {
        getSubjects,
        getUser,
        getSemester,
    },
    Mutation: {
        register,
        login,
        addSubject,
        createSemester,
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'This is a custom type for dates',
        parseValue(value: string) {
            return dayjs(formatDate(value))
        },
        serialize(value: dayjs.Dayjs) {
            return dayjs(value).format('DD-MM-YYYY')
        },
    }),
}

export default Resolvers
