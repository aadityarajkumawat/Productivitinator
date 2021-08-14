import { useEffect } from 'react'

export function useEventListener(
    event: keyof DocumentEventMap,
    handler: (e: KeyboardEvent) => void,
) {
    useEffect(() => {
        document.addEventListener(event, handler as EventListener)
        return () =>
            document.removeEventListener(event, handler as EventListener)
    }, [event, handler])
}
