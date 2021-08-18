import { useHistory } from 'react-router-dom'
import { SubjectItemContainer } from './SubjectItem.styles'

interface SubjectItemProps {
    subjectName: string
    credits: number
    instructor: string
    subjectId: number
    index: number
}

export function SubjectItem({
    credits,
    instructor,
    subjectName,
    subjectId,
    index,
}: SubjectItemProps) {
    let router = useHistory()

    function pushToTasks() {
        router.push(`/college-tasks/${subjectId}`)
    }

    return (
        <SubjectItemContainer
            onClick={pushToTasks}
            initial={{ y: 10 * (index + 1) }}
            animate={{ y: -10 * (index + 1) }}
            transition={{ duration: 0.3 }}
        >
            <div className='subject-name'>{subjectName}</div>
            <div className='credits-and-instructor'>
                <span>Credits: {credits}</span>
                <span>Instructor: {instructor}</span>
            </div>
        </SubjectItemContainer>
    )
}
