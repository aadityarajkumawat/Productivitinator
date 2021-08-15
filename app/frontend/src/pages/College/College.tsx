import { useRef, useState } from 'react'
import { Modal } from '../../components/Modal/Modal'
import { SubjectItem } from '../../components/SubjectItem/SubjectItem'
import { UniversalSearchBar } from '../../components/UniversalSearchBar/UniversalSearchBar'
import { useEventListener } from '../../hooks/useEventListener'
import { CollegeContainer, PositionUSBar } from './College.styles'

const college = {
    semester: 3,
    startDate: '16/08/2021',
    endDate: '21/08/2021',
}

const subjects = [
    { id: 1, name: 'Trignometery', credits: 10, instructor: 'Aditya' },
]

export function College() {
    const [isUSOpen, setUSOpen] = useState<boolean>(false)
    let universalSearchRef = useRef<HTMLInputElement | null>(null)

    function closeUniversalSearch() {
        setUSOpen(false)
    }

    function toggleUniversalSearch() {
        setUSOpen((o) => !o)
    }

    useEventListener('keydown', (evt) => {
        if (evt.key.toLowerCase() === 'u' && evt.ctrlKey) {
            evt.preventDefault()
            toggleUniversalSearch()
            universalSearchRef.current?.focus()
        } else if (evt.key === 'Escape') {
            closeUniversalSearch()
        }
    })

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

            <Modal open={isUSOpen} setClose={closeUniversalSearch}>
                <PositionUSBar>
                    <UniversalSearchBar
                        universalSearchBarRef={universalSearchRef}
                        closeUniversalSearch={closeUniversalSearch}
                    />
                </PositionUSBar>
            </Modal>
        </CollegeContainer>
    )
}
