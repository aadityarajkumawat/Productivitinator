import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEventListener } from '../../hooks/useEventListener'
import { UniversalSearchBarContainer } from './UniversalSearchBar.styles'

interface UniversalSearchBarProps {
    universalSearchBarRef: React.MutableRefObject<HTMLInputElement | null>
    closeUniversalSearch?: () => void
}

export function UniversalSearchBar({
    universalSearchBarRef,
    closeUniversalSearch,
}: React.ComponentProps<'div'> & UniversalSearchBarProps) {
    const [input, setInput] = useState<string>('')
    let router = useHistory()

    function setText(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    }

    useEventListener('keydown', (evt) => {
        let currentRoute = router.location.pathname
        if (evt.key === 'Enter' && universalSearchBarRef.current) {
            evt.preventDefault()
            if (input[0] === '/') {
                if (input === currentRoute && closeUniversalSearch) {
                    closeUniversalSearch()
                } else router.push(input)
            }
        }
    })

    return (
        <UniversalSearchBarContainer>
            <input
                placeholder='Universal Search'
                ref={universalSearchBarRef}
                value={input}
                name='universal search'
                onChange={setText}
                autoComplete='off'
            />
        </UniversalSearchBarContainer>
    )
}
