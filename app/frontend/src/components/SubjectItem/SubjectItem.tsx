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
    function formatSubjectName(subjectName: string) {
        if (subjectName.length > 45) {
            subjectName = subjectName.substr(0, 45) + '...'
        }
        return subjectName
    }

    return (
        <SubjectItemContainer>
            <div className='subject-name'>{formatSubjectName(subjectName)}</div>

            {/* <div className='credits-and-instructor'>
                <span>Credits: {credits}</span>
                <span>Instructor: {instructor}</span>
            </div> */}
        </SubjectItemContainer>
    )
}
