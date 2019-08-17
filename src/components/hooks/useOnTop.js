import { useEffect, useState } from "react"

function isWindowOnTop() {
  return window.scrollY === 0
}

export default function useOnTop() {
  const [isOnTop, setIsOnTop] = useState(true)
  useEffect(() => {
    function onScroll() {
      const onTop = isWindowOnTop()
      setIsOnTop(onTop)
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  return isOnTop
}
