import { useQuery } from 'urql'
import { OpenUniversalSearch } from '../../components/OpenUniversalSearch/OpenUniversalSearch'
import { SubjectItem } from '../../components/SubjectItem/SubjectItem'
import { GET_COLLEGE } from '../../graphql/getSemester'
import { GetCollegeQueryResponse } from '../../graphql/types'
import { ifDataFound } from '../../helpers/ifDataFound'
import { useUniversalSearch } from '../../hooks/useUniversalSearch'
import { CollegeContainer } from './College.styles'
import { CollegeTasks } from './CollegeTasks'

export function College() {
    let search = useUniversalSearch()
    const [{ data, fetching }] = useQuery<GetCollegeQueryResponse>({
        query: GET_COLLEGE,
    })

    return (
        <CollegeContainer>
            <div className='heading'>
                <span className='head'>
                    Semester:
                    {ifDataFound(data, fetching)
                        ? data!.getSemester.semester.semester
                        : 0}
                </span>
                <span className='date'>
                    (
                    {ifDataFound(data, fetching)
                        ? data!.getSemester.semester.semesterStart +
                          '-' +
                          data?.getSemester.semester.semesterEnd
                        : ''}
                    )
                </span>
            </div>
            <div className='listOf'>Subjects</div>
            <div className='subjects-list'>
                {ifDataFound(data, fetching) ? (
                    data!.getSubjects.subjects.map((subject, idx) => (
                        <SubjectItem key={idx} index={idx} {...subject} />
                    ))
                ) : (
                    <div></div>
                )}
            </div>
            <div className='subjects-list'>
                {ifDataFound(data, fetching) ? (
                    data!.getSubjects.subjects.map((subject, idx) => (
                        <CollegeTasks id={subject.subjectId} />
                    ))
                ) : (
                    <div></div>
                )}
            </div>

            <OpenUniversalSearch {...search} />
        </CollegeContainer>
    )
}
