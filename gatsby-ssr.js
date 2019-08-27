/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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
