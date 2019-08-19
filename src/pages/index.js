import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Displays from "../components/displays"
import { useTheme, useMediaQuery, Button } from "@material-ui/core"

const IndexPage = () => {
  const theme = useTheme()
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Layout>
      <div
        style={{
          padding: "10px   5vw",
          background:
            matchesMd || "linear-gradient(150deg, #11998e 20%, #38ef7d 80%)  ",
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <SEO title="Inicio" />
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            textAlign: "center",
            width: matchesMd && "45%",
          }}
        >
          <h1 style={{ color: matchesMd || "#fff" }}>
            El Punto de Venta Online que estabas buscando
          </h1>
          <p>
            La solución para su negocio. Administre las ventas, el inventario,
            las cajas y los clientes. Sin nada que usted tenga que instalar o
            actualizar.
          </p>
          <Button variant="contained" color="primary" size="large">
            Empezar a probar
          </Button>
        </div>
        {matchesMd && (
          <div style={{ width: "50%" }}>
            <Displays />
          </div>
        )}
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
