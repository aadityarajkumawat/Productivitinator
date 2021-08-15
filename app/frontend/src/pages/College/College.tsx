import { useRef, useState } from 'react'
import { useQuery } from 'urql'
import { Modal } from '../../components/Modal/Modal'
import { SubjectItem } from '../../components/SubjectItem/SubjectItem'
import { UniversalSearchBar } from '../../components/UniversalSearchBar/UniversalSearchBar'
import { GET_COLLEGE } from '../../graphql/getSemester'
import { GetCollegeQueryResponse } from '../../graphql/types'
import { ifDataFound } from '../../helpers/ifDataFound'
import { useEventListener } from '../../hooks/useEventListener'
import { CollegeContainer, PositionUSBar } from './College.styles'

export function College() {
    const [isUSOpen, setUSOpen] = useState<boolean>(false)
    const [{ data, fetching }] = useQuery<GetCollegeQueryResponse>({
        query: GET_COLLEGE,
    })
    let universalSearchRef = useRef<HTMLInputElement | null>(null)

    console.log(data)

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
            <div>
                {ifDataFound(data, fetching) ? (
                    data!.getSubjects.subjects.map((subject, idx) => (
                        <SubjectItem key={idx} {...subject} />
                    ))
                ) : (
                    <div></div>
                )}
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
