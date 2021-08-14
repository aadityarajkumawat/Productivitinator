import { SubjectItem } from '../../components/SubjectItem/SubjectItem'
import { CollegeContainer } from './College.styles'

const college = {
    semester: 3,
    startDate: '16/08/2021',
    endDate: '21/08/2021',
}

const subjects = [
    { id: 1, name: 'Trignometery', credits: 10, instructor: 'Aditya' },
    {
        id: 1,
        name: 'Data Structures and Algorithms',
        credits: 10,
        instructor: 'Aditya',
    },
    { id: 1, name: 'Trignometery', credits: 10, instructor: 'Aditya' },
    { id: 1, name: 'Trignometery', credits: 10, instructor: 'Aditya' },
    { id: 1, name: 'Trignometery', credits: 10, instructor: 'Aditya' },
]

export function College() {
    return (
        <CollegeContainer>
            <div className='heading'>
                <span className='head'>Semester: {college.semester}</span>
                <span className='date'>
                    ({college.startDate} - {college.endDate})
                </span>
            </div>
            <div className='listOf'>Subjects</div>
            <div>
                {subjects.map((subject, idx) => (
                    <SubjectItem key={idx} {...subject} />
                ))}
            </div>
        </CollegeContainer>
    )
}
