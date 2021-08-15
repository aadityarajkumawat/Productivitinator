import { gql } from 'urql'

export const GET_TASKS = gql`
    query GetTasksAndSubject($subjectId: Int!) {
        getSubject(subjectId: $subjectId) {
            subject {
                userId
                subjectId
                subjectName
                instructor
                credits
                semester
            }
            error
        }
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
