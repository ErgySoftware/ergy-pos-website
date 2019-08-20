import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Displays from "../components/displays"
import { makeStyles, Button } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  main: {
    padding: "10px   5vw",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    background: "linear-gradient(150deg, #11998e 20%, #38ef7d 80%)  ",
    [theme.breakpoints.up("md")]: {
      background: "none",
    },
  },
  actionContainer: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center",
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      width: "45%",
      color: theme.palette.common.black,
    },
  },
  imageContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "50%",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <section className={classes.main}>
        <SEO title="Inicio" />
        <div className={classes.actionContainer}>
          <h1>El Punto de Venta Online que estabas buscando</h1>
          <p>
            La solución para su negocio. Administre las ventas, el inventario,
            las cajas y los clientes. Sin nada que usted tenga que instalar o
            actualizar.
          </p>
          <Button variant="contained" color="primary" size="large">
            Empezar a probar
          </Button>
        </div>
        <div className={classes.imageContainer}>
          <Displays />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
