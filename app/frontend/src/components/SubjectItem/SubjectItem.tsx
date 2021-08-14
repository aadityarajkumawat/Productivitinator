import React from 'react'
import { SubjectItemContainer } from './SubjectItem.styles'

interface SubjectItemProps {
    id: number
    name: string
    credits: number
    instructor: string
}

export function SubjectItem({
    credits,
    id,
    instructor,
    name,
}: SubjectItemProps) {
    return (
        <SubjectItemContainer>
            <div className='subject-name'>{name}</div>
            <div className='credits-and-instructor'>
                <span>Credits: {credits}</span>
                <span>Instructor: {instructor}</span>
            </div>
        </SubjectItemContainer>
    )
}
