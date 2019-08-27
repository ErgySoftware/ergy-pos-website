import { useEffect, useState } from "react"

export default function useIsViewable(ref) {
  const [viewable, setViewable] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setViewable(entry.isIntersecting)
      })
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref])
  return viewable
}
