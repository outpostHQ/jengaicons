// use local storage hook in next.js app
import { useState } from "react"

export const useLocalStorage = (key: string, initialValue: any) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item == null) {
        setIsFirstRender(true)
      } else {
        setIsFirstRender(false)
      }
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage &&
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {}
  }

  return [storedValue, setValue, isFirstRender] as const
}
