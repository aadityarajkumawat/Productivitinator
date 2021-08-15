import { gql } from 'urql'

export const ADD_SUBJECT = gql`
    mutation AddSubject(
        $subjectName: String!
        $instructor: String!
        $credits: Int!
        $semester: Int!
    ) {
        addSubject(
            subjectName: $subjectName
            instructor: $instructor
            credits: $credits
            semester: $semester
        ) {
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
    }
`
