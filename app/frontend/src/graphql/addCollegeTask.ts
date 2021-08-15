import { gql } from 'urql'

export const ADD_COLLEGE_TASK = gql`
    mutation AddCollegeTask(
        $subjectId: Int!
        $taskName: String!
        $timeAssigned: Date!
        $lastDate: Date!
    ) {
        addTask(
            subjectId: $subjectId
            taskName: $taskName
            timeAssigned: $timeAssigned
            lastDate: $lastDate
        ) {
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
