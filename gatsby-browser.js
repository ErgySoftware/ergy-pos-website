/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import useGlobalStyle from "./src/components/hooks/useGlobalStyle"

export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}

function Wrapper({ children }) {
  useGlobalStyle()
  return <>{children}</>
}

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
    console.log(`👍 IntersectionObserver is polyfilled`)
  }
}
