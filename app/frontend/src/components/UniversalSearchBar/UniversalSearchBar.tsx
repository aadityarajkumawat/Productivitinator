import React from 'react'
import { UniversalSearchBarContainer } from './UniversalSearchBar.styles'

interface UniversalSearchBarProps {
    universalSearchBarRef: React.MutableRefObject<HTMLInputElement | null>
}

export function UniversalSearchBar(
    props: React.ComponentProps<'div'> & UniversalSearchBarProps,
) {
    return (
        <UniversalSearchBarContainer>
            <input
                placeholder='Universal Search'
                ref={props.universalSearchBarRef}
            />
        </UniversalSearchBarContainer>
    )
}
