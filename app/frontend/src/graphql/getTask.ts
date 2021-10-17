import { gql } from 'urql'

export const GET_TASK = gql`
    query GetTask($taskId: Int!) {
        getTask(taskId: $taskId) {
            task {
                subjectId
                taskId
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
