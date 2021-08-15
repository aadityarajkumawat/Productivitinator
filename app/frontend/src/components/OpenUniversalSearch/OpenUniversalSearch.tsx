import React from 'react'
import { PositionUSBar } from '../../pages/College/College.styles'
import { Modal } from '../Modal/Modal'
import { UniversalSearchBar } from '../UniversalSearchBar/UniversalSearchBar'

interface OpenUniversalSearchProps {
    isUSOpen: boolean
    closeUniversalSearch: () => void
    universalSearchRef: React.MutableRefObject<HTMLInputElement | null>
}

export function OpenUniversalSearch({
    isUSOpen,
    closeUniversalSearch,
    universalSearchRef,
}: OpenUniversalSearchProps) {
    return (
        <Modal open={isUSOpen} setClose={closeUniversalSearch}>
            <PositionUSBar>
                <UniversalSearchBar
                    universalSearchBarRef={universalSearchRef}
                    closeUniversalSearch={closeUniversalSearch}
                />
            </PositionUSBar>
        </Modal>
    )
}
