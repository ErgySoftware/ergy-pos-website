import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentList from "../components/ContentList"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, makeStyles, Link } from "@material-ui/core"
import theme from "../theme"

const useStyles = makeStyles(
  theme => ({
    section: {
      padding: "10px   5vw",
      margin: "0 auto",
      [theme.breakpoints.up("xl")]: {
        padding: "10px calc(calc(100vw - 1200px) / 2)", // mantiene el ancho maximo en 1200px y permite backgound
      },
      [theme.breakpoints.up("xxl")]: {
        padding: "10px calc(calc(100vw - 1800px) / 2)",
      },
      "& strong, & a": {
        color: theme.palette.primary.light,
      },
      "&:nth-child(even)": {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
      },
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

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
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
      ...fixedImage
    }
    creditImage: file(relativePath: { eq: "credit.png" }) {
      ...fixedImage
    }
    dianImage: file(relativePath: { eq: "dian.png" }) {
      ...fixedImage
    }
    personalizeImage: file(relativePath: { eq: "personalize.png" }) {
      ...fixedImage
    }
    productImage: file(relativePath: { eq: "product.png" }) {
      ...fixedImage
    }
    inventoryImage: file(relativePath: { eq: "inventory.png" }) {
      ...fixedImage
    }
    barcodeImage: file(relativePath: { eq: "barcode-product.png" }) {
      ...fixedImage
    }
    providersImage: file(relativePath: { eq: "providers.png" }) {
      ...fixedImage
    }
    billImage: file(relativePath: { eq: "bill.png" }) {
      ...fixedImage
    }
    cashRegisterlImage: file(relativePath: { eq: "cash-register.png" }) {
      ...fixedImage
    }
    customerImage: file(relativePath: { eq: "customer.png" }) {
      ...fixedImage
    }
    utilityImage: file(relativePath: { eq: "utility.png" }) {
      ...fixedImage
    }
    reportImage: file(relativePath: { eq: "report.png" }) {
      ...fixedImage
    }
  }
`
function toContentItem(item) {
  return (
    <>
      <Img fixed={item.image} alt={item.title} />
      <div>
        <Typography variant="h5" component="h3" align="center">
          {item.title}
        </Typography>
        <Typography variant="body2" align="center">
          {item.description}
        </Typography>
      </div>
    </>
  )
}

const Characteristics = () => {
  const classes = useStyles()
  const images = useStaticQuery(pageQuery)
  const invoicingItems = [
    {
      title: "Cotizaciones",
      image: images.quoteImage.childImageSharp.fixed,
      description: (
        <>
          Adelante a sus competidores realizando cotizaciones instantaneas desde
          cualquier lugar y ofrezcale a sus clientes la mejor y mas pronta
          atención.
        </>
      ),
    },
    {
      title: "Creditos",
      image: images.creditImage.childImageSharp.fixed,
      description: (
        <>
          Mantenga lineas de credito a sus mejores clientes y controle los pagos
          y abonos para que sus cuentas siempre sean claras.
        </>
      ),
    },
    {
      title: "Información tributaria",
      image: images.dianImage.childImageSharp.fixed,
      description: (
        <>
          Maneje diferentes tipos de impuesto y mantenga un consecutivo de
          facturación para que las facturas que emita cumplan la reglamentación
          impuesta por la DIAN.
        </>
      ),
    },
    {
      title: "Personalización de Factura",
      image: images.personalizeImage.childImageSharp.fixed,
      description: (
        <>
          Contacta con{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://api.whatsapp.com/send?phone=${
              images.site.siteMetadata.contactPhone
            }&text=${encodeURI(images.site.siteMetadata.contactMessage)}`}
          >
            ventas
          </Link>{" "}
          para preguntar por las opciones de personalización para que su factura
          represente la estética de su negocio.
        </>
      ),
    },
  ].map(toContentItem)
  const inventoryItems = [
    {
      title: "Productos",
      image: images.productImage.childImageSharp.fixed,
      description: (
        <>
          Registre miles de productos en nuestra plataforma y clasifiquelos en
          categorías para que sus busquedas sean cada vez mas sencillas.
        </>
      ),
    },
    {
      title: "Inventario Actualizado",
      image: images.inventoryImage.childImageSharp.fixed,
      description: (
        <>
          Mantenga el control sobre el inventario, movimientos, costos y
          cantidades evitando la falta y los sobreinventarios.
        </>
      ),
    },
    {
      title: "Código de Barras",
      image: images.barcodeImage.childImageSharp.fixed,
      description: (
        <>
          Identifique sus productos a traves del código de barras que{" "}
          <strong>Ergy POS</strong> genera para usted.
        </>
      ),
    },
    {
      title: "Proveedores",
      image: images.providersImage.childImageSharp.fixed,
      description: (
        <>
          Mantenga una base de datos de sus proveedores, contactos de negocios e
          información bancaria.
        </>
      ),
    },
    {
      title: "Compras",
      image: images.billImage.childImageSharp.fixed,
      description: (
        <>
          Registre las facturas de sus compras y alimete automaticamente el
          inventario de su negocio.
        </>
      ),
    },
  ].map(toContentItem)
  const businessIntel = [
    {
      title: "Gestión de Cajas",
      image: images.cashRegisterlImage.childImageSharp.fixed,
      description: (
        <>
          Con <strong>Ergy POS</strong> su negocio siempre tendrá las cuentas
          claras. Gestione la apertura y cierre de cajas y obtenga un reporte
          detallado de las ventas realizadas durante el día.
        </>
      ),
    },
    {
      title: "Clientes",
      image: images.customerImage.childImageSharp.fixed,
      description: (
        <>
          Administre la base de datos de sus clientes de una forma confiable,
          segura y efectiva.
        </>
      ),
    },
    {
      title: "Utilidad Neta",
      image: images.utilityImage.childImageSharp.fixed,
      description: (
        <>
          Para que siempre tenga claro el estado de su negocio{" "}
          <strong>Ergy POS</strong> realiza diferentes informes de utilidad para
          que pueda tomar las mejores decisiones de forma informada.
        </>
      ),
    },
    {
      title: "Reportes de Facturación",
      image: images.reportImage.childImageSharp.fixed,
      description: (
        <>
          Si su negocio requiere reportar ante la DIAN los consecutivos
          consumidos, <strong>Ergy POS</strong> le permite generar un reporte
          con toda la información de las ventas: el cliente, costo total,
          descuentos e impuestos detallados.
        </>
      ),
    },
  ].map(toContentItem)
  return (
    <Layout>
      <SEO title="Características" />
      <section id="caracteristicas" className={classes.section}>
        <div className={classes.description}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
          >
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
        <Typography variant="h4" component="h2" align="center">
          Facturación
        </Typography>
        <ContentList items={invoicingItems}></ContentList>
      </section>
      <section className={classes.section}>
        <Typography variant="h4" component="h2" align="center">
          Inventario
        </Typography>
        <ContentList items={inventoryItems}></ContentList>
      </section>
      <section className={classes.section}>
        <Typography variant="h4" component="h2" align="center">
          Inteligencia de Negocio
        </Typography>
        <ContentList items={businessIntel}></ContentList>
      </section>
    </Layout>
  )
}

export default Characteristics
