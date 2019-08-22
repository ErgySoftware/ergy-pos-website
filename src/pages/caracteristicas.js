import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentList from "../components/ContentList"
import { useStaticQuery } from "gatsby"
import { Typography, makeStyles, Link } from "@material-ui/core"
import theme from "../theme"

const useStyles = makeStyles(
  theme => ({
    section: {
      padding: "10px   5vw",
    },
    description: {
      visibility: "hidden",
      height: 0,
      [theme.breakpoints.up("md")]: {
        visibility: "visible",
        height: "auto",
      },
    },
  }),
  { defaultTheme: theme }
)

const Characteristics = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          contactMail
          contactPhone
          contactMessage
        }
      }
      quoteImage: file(relativePath: { eq: "receipt.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      creditImage: file(relativePath: { eq: "credit.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dianImage: file(relativePath: { eq: "dian.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const items = [
    <>
      <Img fixed={data.quoteImage.childImageSharp.fixed} alt="Cotizaciones" />
      <div>
        <Typography variant="h5" component="h3">
          Cotizaciones
        </Typography>
        <Typography variant="body2">
          Adelante a sus competidores realizando cotizaciones instantaneas desde
          cualquier lugar y ofrezcale a sus clientes la mejor y mas pronta
          atención.
        </Typography>
      </div>
    </>,
    <>
      <Img fixed={data.creditImage.childImageSharp.fixed} alt="Creditos" />
      <div>
        <Typography variant="h5" component="h3">
          Creditos
        </Typography>
        <Typography variant="body2">
          Mantenga lineas de credito a sus mejores clientes y controle los pagos
          y abonos para que sus cuentas siempre sean claras.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.dianImage.childImageSharp.fixed}
        alt="Consecutivos DIAN"
      />
      <div>
        <Typography variant="h5" component="h3">
          Consecutivos DIAN
        </Typography>
        <Typography variant="body2">
          Mantenga un consecutivo de facturación para que las facturas que emita
          cumplan la reglamentación impuesta por la DIAN.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.dianImage.childImageSharp.fixed}
        alt="Personalización de Factura"
      />
      <div>
        <Typography variant="h5" component="h3">
          Personalización de Factura
        </Typography>
        <Typography variant="body2">
          <Link
            underline="hover"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://api.whatsapp.com/send?phone=${
              data.site.siteMetadata.contactPhone
            }&text=${encodeURI(data.site.siteMetadata.contactMessage)}`}
          >
            Contacta con ventas
          </Link>{" "}
          para preguntar por las opciones de personalización para que su factura
          represente la estética de su negocio.
        </Typography>
      </div>
    </>,
  ]
  const items2 = [
    <>
      <Img fixed={data.quoteImage.childImageSharp.fixed} alt="Productos" />
      <div>
        <Typography variant="h5" component="h3">
          Productos
        </Typography>
        <Typography variant="body2">
          Registre miles de productos en nuestra plataforma y clasifiquelos en
          categorías para que sus busquedas sean cada vez mas sencillas.
        </Typography>
      </div>
    </>,
  ]
  return (
    <Layout>
      <SEO title="Características" />
      <section id="caracteristicas" className={classes.section}>
        <div className={classes.description}>
          <Typography variant="h3" component="h1">
            Características
          </Typography>
          <Typography variant="body1" paragraph={true}>
            Conozca lo que <strong>Ergy POS</strong> puede hacer para su
            negocio. Administre su inventario, gestione sus clientes, organice
            las cajas, facture, cotice y haga creditos todo desde cualquier
            lugar en su telefono, tablet o computador.
          </Typography>
        </div>
      </section>
      <section className={classes.section}>
        <Typography variant="h4" component="h2">
          Facturación
        </Typography>
        <ContentList items={items}></ContentList>
      </section>
      <section className={classes.section}>
        <Typography variant="h4" component="h2">
          Inventario
        </Typography>
        <ContentList items={items2}></ContentList>
      </section>
    </Layout>
  )
}

export default Characteristics
