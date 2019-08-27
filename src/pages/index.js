import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Displays from "../components/displays"
import Description from "../components/description"
import { makeStyles, Button } from "@material-ui/core"
import theme from "../theme"

const useStyles = makeStyles(
  theme => ({
    main: {
      padding: "10px   5vw",
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "center",
      background: theme.palette.background.gradient,
      height: "calc(100vh - 60px)",
      [theme.breakpoints.up("lg")]: {
        background: "none",
        height: "calc(100vh - 115px)",
      },
    },
    description: {
      maxWidth: 900,
      margin: "10px auto",
      [theme.breakpoints.up("xl")]: {
        maxWidth: 1200,
      },
      [theme.breakpoints.up("xxl")]: {
        maxWidth: 1800,
      },
    },
    actionContainer: {
      display: "flex",
      flexFlow: "column",
      textAlign: "center",
      color: theme.palette.common.white,
      [theme.breakpoints.up("lg")]: {
        width: "45%",
        color: theme.palette.common.black,
      },
    },
    imageContainer: {
      display: "none",
      [theme.breakpoints.up("lg")]: {
        display: "block",
        width: "50%",
        maxHeight: "100%",
        maxWidth: "100vh",
      },
    },
  }),
  { defaultTheme: theme }
)

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Inicio" />
      <section id="principal" className={classes.main}>
        <div className={classes.actionContainer}>
          <h1>El Punto de Venta Online que estabas buscando</h1>
          <p>
            La solución ideal para su negocio. Administre ventas, inventario,
            cajas y clientes. Sin nada que usted tenga que instalar o
            actualizar.
          </p>
          <Button variant="contained" color="primary" size="large">
            probar gratis
          </Button>
        </div>
        <div className={classes.imageContainer}>
          <Displays />
        </div>
      </section>
      <section id="detalles" className={classes.description}>
        <Description />
      </section>
    </Layout>
  )
}

export default IndexPage
