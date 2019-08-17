/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { ThemeProvider } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"
import theme from "../theme"

library.add(faBars, faTimes) // Aca se añaden todos los iconos que se vayan a usar en cualquier página

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: matches ? 115 : 50,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
