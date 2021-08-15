import { gql } from 'urql'

export const GET_SEMESTER = gql`
    query GetSemester {
        getSemester {
            semester {
                metaId
                userId
                semester
                semesterStart
                semesterEnd
            }
            error
        }
    }
`
