import { gql } from 'urql'

export const DELETE_TASK = gql`
    mutation DeleteTask($taskId: Int!) {
        deleteTask(taskId: $taskId) {
            task {
                taskId
                subjectId
            }
            error
        }
    }
`
