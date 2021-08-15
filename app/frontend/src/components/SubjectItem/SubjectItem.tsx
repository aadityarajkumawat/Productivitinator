import { useHistory } from 'react-router-dom'
import { SubjectItemContainer } from './SubjectItem.styles'

interface SubjectItemProps {
    subjectName: string
    credits: number
    instructor: string
    subjectId: number
}

export function SubjectItem({
    credits,
    instructor,
    subjectName,
    subjectId,
}: SubjectItemProps) {
    let router = useHistory()

    function pushToTasks() {
        router.push(`/college-tasks/${subjectId}`)
    }

    return (
        <SubjectItemContainer onClick={pushToTasks}>
            <div className='subject-name'>{subjectName}</div>
            <div className='credits-and-instructor'>
                <span>Credits: {credits}</span>
                <span>Instructor: {instructor}</span>
            </div>
        </SubjectItemContainer>
    )
}
