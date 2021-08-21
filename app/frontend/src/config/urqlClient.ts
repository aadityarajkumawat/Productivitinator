import {
    createClient,
    dedupExchange,
    defaultExchanges,
    fetchExchange,
    gql,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange } from '@urql/exchange-graphcache'
import { not } from '../helpers/not'
import { CollegeTask, GetTasksResponse } from '../graphql/types'

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
                    deleteTask(result, args, cache, _) {
                        let query = gql`
                            query GetTasks($subjectId: Int!) {
                                getTasks(subjectId: $subjectId) {
                                    tasks {
                                        taskId
                                    }
                                    error
                                }
                            }
                        `
                        cache.updateQuery(
                            {
                                query,
                                variables: {
                                    subjectId: (result as any).deleteTask.task
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
                    markTask(result, args, cache, __) {
                        let subjectId = (result as any).markTask.task.subjectId
                        let taskId = args.taskId
                        let query = gql`
                            query GetTasks($subjectId: Int!) {
                                getTasks(subjectId: $subjectId) {
                                    tasks {
                                        taskId
                                        completed
                                    }
                                }
                            }
                        `

                        cache.updateQuery(
                            { query, variables: { subjectId } },
                            function (
                                data: { getTasks: GetTasksResponse } | null,
                            ) {
                                if (data) {
                                    let task = data.getTasks.tasks.find(
                                        (task: CollegeTask) =>
                                            task.taskId === taskId,
                                    )
                                    if (task) {
                                        task.completed = not(task.completed)
                                    }
                                }
                                return data
                            },
                        )
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
