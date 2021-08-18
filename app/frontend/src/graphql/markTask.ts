import { gql } from 'urql'

export const MARK_TASK = gql`
    mutation MarkTask($taskId: Int!) {
        markTask(taskId: $taskId) {
            task {
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
