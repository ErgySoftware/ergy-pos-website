import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Displays from "../components/displays"
import {
  makeStyles,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core"
import { useStaticQuery } from "gatsby"

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
  const data = useStaticQuery(graphql`
    query {
      speedImage: file(relativePath: { eq: "speed.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      easyImage: file(relativePath: { eq: "easy.png" }) {
        childImageSharp {
          fluid(maxWidth: 460, maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      portableImage: file(relativePath: { eq: "tablet.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Inicio" />
      <section id="principal" className={classes.main}>
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
      <section id="detalles">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <div style={{ width: "30%", margin: "0 auto" }}>
                  <Img
                    fluid={data.speedImage.childImageSharp.fluid}
                    alt="Rapidez"
                  />
                </div>
                <Typography variant="h3" align="center">
                  Rapidez
                </Typography>
                <Typography variant="body1" align="center">
                  Maximice la atención al cliente a la hora de vender con
                  nuestra interfaz rápida e intuitiva.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <div style={{ width: "30%", margin: "0 auto" }}>
                  <Img
                    fluid={data.easyImage.childImageSharp.fluid}
                    alt="Sencillez"
                  />
                </div>
                <Typography variant="h3" align="center">
                  Sencillez
                </Typography>
                <Typography variant="body1" align="center">
                  Obtenga una experiencia intuitiva en nuestra plataforma
                  diseñada para ser usada sin complicaciones ni dificultades
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <div style={{ width: "30%", margin: "0 auto" }}>
                  <Img
                    fluid={data.portableImage.childImageSharp.fluid}
                    alt="Rapidez"
                  />
                </div>
                <Typography variant="h3" align="center">
                  Portabilidad
                </Typography>
                <Typography variant="body1" align="center">
                  Lleve su negocio en el bolsillo a cualquier lugar y en
                  cualquier momento. No vuelva a perder una oportunidad de
                  negocio por no tener la información a la mano.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Layout>
  )
}

export default IndexPage
