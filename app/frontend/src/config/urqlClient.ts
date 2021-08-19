import {
    createClient,
    dedupExchange,
    defaultExchanges,
    fetchExchange,
    gql,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange } from '@urql/exchange-graphcache'

let client = createClient({
    url: 'http://localhost:4000',
    fetchOptions: { credentials: 'include' },
    exchanges: [
        devtoolsExchange,
        cacheExchange({
            updates: {
                Mutation: {
                    addSubject(_result, _, cache, __) {
                        let query = gql`
                            query {
                                getSubjects {
                                    subjects {
                                        userId
                                        subjectId
                                        subjectName
                                        instructor
                                        credits
                                        semester
                                    }
                                    error
                                }
                            }
                        `
                        cache.updateQuery({ query }, (data) => {
                            data.getSubjects.subjects.push(
                                (_result.addSubject as any).subject,
                            )
                            return data
                        })
                    },
                    addTask(_result, args, cache, _) {
                        let query = gql`
                            query GetTasksAndSubject($subjectId: Int!) {
                                getTasks(subjectId: $subjectId) {
                                    tasks {
                                        taskId
                                        subjectId
                                        taskName
                                        timeAssigned
                                        lastDate
                                        completed
                                        completedAt
                                        comment
                                    }
                                    error
                                }
                            }
                        `
                        cache.updateQuery(
                            { query, variables: { subjectId: args.subjectId } },
                            (data) => {
                                data.getTasks.tasks.push(
                                    (_result.addTask as any).task,
                                )
                                return data
                            },
                        )
                    },
                    deleteTask(_result, args, cache, _) {
                        let fields = cache.inspectFields('Query')
                        let requiredQuery = {}
                        for (let field of fields) {
                            if (field.fieldName === 'getSubject') {
                                requiredQuery = field
                            }
                        }
                        let query = gql`
                            query GetTasks($subjectId: Int!) {
                                getTasks(subjectId: $subjectId) {
                                    tasks {
                                        taskId
                                        subjectId
                                        taskName
                                        timeAssigned
                                        lastDate
                                        completed
                                        completedAt
                                        comment
                                    }
                                    error
                                }
                            }
                        `
                        cache.updateQuery(
                            {
                                query,
                                variables: {
                                    subjectId: (requiredQuery as any).arguments
                                        .subjectId,
                                },
                            },
                            (data) => {
                                try {
                                    let taskId = args.taskId
                                    let i = 0
                                    for (let [
                                        idx,
                                        task,
                                    ] of data.getTasks.tasks.entries()) {
                                        if (task.taskId === taskId) {
                                            i = idx
                                        }
                                    }
                                    delete data.getTasks.tasks[i]
                                    data.getTasks.tasks =
                                        data.getTasks.tasks.filter(
                                            (task: any) => task !== undefined,
                                        )
                                    return data
                                } catch (error) {
                                    console.log(error.message)
                                    return []
                                }
                            },
                        )
                    },
                    markTask(_result, _, cache, __) {
                        let fields = cache.inspectFields('Query')
                        console.log(fields)

                        fields
                            .filter((field) => field.fieldName === 'getTasks')
                            .forEach((field) => {
                                cache.invalidate('Query', field.fieldName)
                                cache.invalidate(
                                    'Query',
                                    field.fieldName,
                                    field.arguments,
                                )
                            })
                    },
                },
            },
        }),
        ...defaultExchanges,
        dedupExchange,
        fetchExchange,
    ],
})
export default client
