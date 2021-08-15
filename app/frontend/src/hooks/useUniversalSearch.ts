import { useRef, useState } from 'react'
import { useEventListener } from './useEventListener'

export function useUniversalSearch() {
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

    return { isUSOpen, closeUniversalSearch, universalSearchRef }
}
