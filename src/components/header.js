import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MyLink from "./MyLink"
import { useMediaQuery, Button } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import classNames from "classnames"
import useOnTop from "./hooks/useOnTop"

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  const [isToogled, setIsToogled] = useState(false)
  const [isOnTop, props] = useOnTop()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <header
      id="main-header"
      className={classNames({ [styles.border]: !isOnTop })}
      {...props}
    >
      <div style={{ width: matches ? 180 : 90 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Logo Ergy POS"
          />
        </Link>
      </div>

      <button
        id="main-menu-toggle"
        onClick={() => setIsToogled(!isToogled)}
        className={styles.menuToggle + " " + styles.actionBtn}
        aria-label="Abrir menú principal"
      >
        <span className={styles.srOnly}>Abrir menú principal</span>
        <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
      </button>

      <nav
        id="main-menu"
        className={
          styles.mainMenu + " " + ((isToogled || matches) && styles.open)
        }
        aria-label="Menú Principal"
        aria-hidden={!(isToogled || matches)}
      >
        <div className={styles.menuHeader}>
          <div className={styles.imgContainer}>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Logo Ergy POS"
            />
          </div>
          <button
            id="main-menu-close"
            onClick={() => setIsToogled(false)}
            className={styles.menuClose + " " + styles.actionBtn}
            aria-label="Cerrar Menú Principal"
          >
            <span className={styles.srOnly}>Close main menu</span>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
        </div>
        <ul>
          <li>
            <Button
              variant="outlined"
              color="primary"
              href="https://ventas.ergy-software.com"
              className={styles.mainLink}
            >
              Iniciar Sesión
            </Button>
          </li>
          <li>
            <MyLink to="/" underline="none">
              Obtener
            </MyLink>
          </li>
          <li>
            <MyLink to="/" underline="none">
              Características
            </MyLink>
          </li>
          <li>
            <MyLink to="/" underline="none">
              Planes
            </MyLink>
          </li>
          <li>
            <MyLink to="/" underline="none">
              Documentación
            </MyLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
