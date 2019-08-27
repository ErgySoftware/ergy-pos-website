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
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { useMediaQuery } from "@material-ui/core"
import theme from "../theme"
import Footer from "./footer"

library.add(faBars, faTimes, faEnvelope, faWhatsappSquare) // Aca se añaden todos los iconos que se vayan a usar en cualquier página

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          contactMail
          contactPhone
          contactMessage
        }
      }
    }
  `)
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{
          margin: `0 auto`,
          paddingTop: matches ? 115 : 60,
        }}
      >
        {children}
      </main>
      <Footer
        phone={data.site.siteMetadata.contactPhone}
        mail={data.site.siteMetadata.contactMail}
        message={data.site.siteMetadata.contactMessage}
      ></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
