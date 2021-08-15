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
import { addTask } from './mutations/addTask'
import { getTasks } from './queries/getTasks'
import { getSubject } from './queries/getSubject'
import { deleteTask } from './mutations/deleteTask'

export interface ResolversI {
    Query: {
        getSubjects: typeof getSubjects
        getUser: typeof getUser
        getSemester: typeof getSemester
        getTasks: typeof getTasks
        getSubject: typeof getSubject
    }
    Mutation: {
        register: typeof register
        login: typeof login
        addSubject: typeof addSubject
        createSemester: typeof createSemester
        addTask: typeof addTask
        deleteTask: typeof deleteTask
    }
    Date: GraphQLScalarType
}

let Resolvers: ResolversI = {
    Query: {
        getSubjects,
        getUser,
        getSemester,
        getTasks,
        getSubject,
    },
    Mutation: {
        register,
        login,
        addSubject,
        createSemester,
        addTask,
        deleteTask,
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'This is a custom type for dates',
        parseValue(value: string) {
            return dayjs(formatDate(value))
        },
        serialize(value: dayjs.Dayjs) {
            return dayjs(value).format('DD/MM/YYYY')
        },
    }),
}

export default Resolvers
