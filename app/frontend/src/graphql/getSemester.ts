import { gql } from 'urql'

export const GET_COLLEGE = gql`
    query GetCollege {
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
