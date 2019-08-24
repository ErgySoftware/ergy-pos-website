import { useState } from "react"
import useIsViewable from "./useIsViewable"

export default function useFirstViewable(ref) {
  const [first, setFirst] = useState(false)
  const isViewable = useIsViewable(ref)
  if (!first && isViewable) {
    setFirst(true)
  }
  return first
}
