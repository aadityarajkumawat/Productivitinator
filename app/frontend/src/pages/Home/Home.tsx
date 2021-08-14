import { useRef } from 'react'
import { UniversalSearchBar } from '../../components/UniversalSearchBar/UniversalSearchBar'
import { useEventListener } from '../../hooks/useEventListener'
import { HomeContainer } from './Home.styles'

export function Home() {
    let universalSearchBarRef = useRef<HTMLInputElement | null>(null)

    useEventListener('keydown', (evt) => {
        if (evt.key.toLowerCase() === 'u' && evt.ctrlKey) {
            evt.preventDefault()
            console.log('captured', universalSearchBarRef)
            universalSearchBarRef.current?.focus()
        }
    })

    return (
        <HomeContainer>
            <UniversalSearchBar universalSearchBarRef={universalSearchBarRef} />
        </HomeContainer>
    )
}
