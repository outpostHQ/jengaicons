import { useState, useRef, useEffect } from "react"

export const useElementHeight = () => {
  const [height, setHeight] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (elementRef.current) setHeight(elementRef.current.clientHeight)
  }, [elementRef.current?.clientHeight]) //empty dependency array so it only runs once at render

  return [height, elementRef]
}
