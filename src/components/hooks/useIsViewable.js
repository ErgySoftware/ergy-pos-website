import { useEffect, useState } from "react"

export default function useIsViewable(ref) {
  const [viewable, setViewable] = useState(false)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      setViewable(entry.isIntersecting)
    })
  })
  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref, observer])
  return viewable
}
