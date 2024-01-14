import { useRef, useEffect, useCallback } from 'react'

export default function useDebounce<T extends any[]>(
  Function: (...args: T) => void,
  delay: number
): (...args: T) => void {
  const timeoutRef = useRef<number | null>(null)

  const debounceFunction = useCallback(
    (...params: T) => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        Function(...params)
      }, delay)
    },
    [Function, delay]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return debounceFunction
}
