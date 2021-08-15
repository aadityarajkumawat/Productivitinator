import React from 'react'
import { SubjectItemContainer } from './SubjectItem.styles'

interface SubjectItemProps {
    subjectName: string
    credits: number
    instructor: string
}

export function SubjectItem({
    credits,
    instructor,
    subjectName,
}: SubjectItemProps) {
    return (
        <SubjectItemContainer>
            <div className='subject-name'>{subjectName}</div>
            <div className='credits-and-instructor'>
                <span>Credits: {credits}</span>
                <span>Instructor: {instructor}</span>
            </div>
        </SubjectItemContainer>
    )
}
