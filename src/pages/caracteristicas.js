import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentList from "../components/ContentList"
import { useStaticQuery } from "gatsby"
import { Typography, makeStyles, Link, useMediaQuery } from "@material-ui/core"
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
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      creditImage: file(relativePath: { eq: "credit.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dianImage: file(relativePath: { eq: "dian.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      personalizeImage: file(relativePath: { eq: "personalize.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      productImage: file(relativePath: { eq: "product.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inventoryImage: file(relativePath: { eq: "inventory.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barcodeImage: file(relativePath: { eq: "barcode-product.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      providersImage: file(relativePath: { eq: "providers.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      billImage: file(relativePath: { eq: "bill.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cashRegisterlImage: file(relativePath: { eq: "cash-register.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      customerImage: file(relativePath: { eq: "customer.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      utilityImage: file(relativePath: { eq: "utility.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reportImage: file(relativePath: { eq: "report.png" }) {
        childImageSharp {
          fixed(height: 150) {
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
        <Typography variant="h5" component="h3" align="center">
          Cotizaciones
        </Typography>
        <Typography variant="body2" align="center">
          Adelante a sus competidores realizando cotizaciones instantaneas desde
          cualquier lugar y ofrezcale a sus clientes la mejor y mas pronta
          atención.
        </Typography>
      </div>
    </>,
    <>
      <Img fixed={data.creditImage.childImageSharp.fixed} alt="Creditos" />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Creditos
        </Typography>
        <Typography variant="body2" align="center">
          Mantenga lineas de credito a sus mejores clientes y controle los pagos
          y abonos para que sus cuentas siempre sean claras.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.dianImage.childImageSharp.fixed}
        alt="Información tributaria"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Información tributaria
        </Typography>
        <Typography variant="body2" align="center">
          Maneje diferentes tipos de impuesto y mantenga un consecutivo de
          facturación para que las facturas que emita cumplan la reglamentación
          impuesta por la DIAN.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.personalizeImage.childImageSharp.fixed}
        alt="Personalización de Factura"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Personalización de Factura
        </Typography>
        <Typography variant="body2" align="center">
          Contacta con{" "}
          <Link
            underline="hover"
            color="initial"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://api.whatsapp.com/send?phone=${
              data.site.siteMetadata.contactPhone
            }&text=${encodeURI(data.site.siteMetadata.contactMessage)}`}
          >
            ventas
          </Link>{" "}
          para preguntar por las opciones de personalización para que su factura
          represente la estética de su negocio.
        </Typography>
      </div>
    </>,
  ]
  const items2 = [
    <>
      <Img fixed={data.productImage.childImageSharp.fixed} alt="Productos" />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Productos
        </Typography>
        <Typography variant="body2" align="center">
          Registre miles de productos en nuestra plataforma y clasifiquelos en
          categorías para que sus busquedas sean cada vez mas sencillas.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.inventoryImage.childImageSharp.fixed}
        alt="Inventario Actualizado"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Inventario Actualizado
        </Typography>
        <Typography variant="body2" align="center">
          Mantenga el control sobre el inventario, movimientos, costos y
          cantidades evitando la falta y los sobreinventarios.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.barcodeImage.childImageSharp.fixed}
        alt="Código de Barras"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Código de Barras
        </Typography>
        <Typography variant="body2" align="center">
          Identifique sus productos a traves del código de barras que{" "}
          <strong>Ergy POS</strong> genera para usted.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.providersImage.childImageSharp.fixed}
        alt="Proveedores"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Proveedores
        </Typography>
        <Typography variant="body2" align="center">
          Mantenga una base de datos de sus proveedores, contactos de negocios e
          información bancaria.
        </Typography>
      </div>
    </>,
    <>
      <Img fixed={data.billImage.childImageSharp.fixed} alt="Compras" />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Compras
        </Typography>
        <Typography variant="body2" align="center">
          Registre las facturas de sus compras y alimete automaticamente el
          inventario de su negocio.
        </Typography>
      </div>
    </>,
  ]
  const items3 = [
    <>
      <Img
        fixed={data.cashRegisterlImage.childImageSharp.fixed}
        alt="Gestión de Cajas"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Gestión de Cajas
        </Typography>
        <Typography variant="body2" align="center">
          Con <strong>Ergy POS</strong> su negocio siempre tendrá las cuentas
          claras. Gestione la apertura y cierre de cajas y obtenga un reporte
          detallado de las ventas realizadas durante el día.
        </Typography>
      </div>
    </>,
    <>
      <Img fixed={data.customerImage.childImageSharp.fixed} alt="Clientes" />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Clientes
        </Typography>
        <Typography variant="body2" align="center">
          Administre la base de datos de sus clientes de una forma confiable,
          segura y efectiva.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.utilityImage.childImageSharp.fixed}
        alt="Utilidad Neta"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Utilidad Neta
        </Typography>
        <Typography variant="body2" align="center">
          Para que siempre tenga claro el estado de su negocio{" "}
          <strong>Ergy POS</strong> realiza diferentes informes de utilidad para
          que pueda tomar las mejores decisiones de forma informada.
        </Typography>
      </div>
    </>,
    <>
      <Img
        fixed={data.reportImage.childImageSharp.fixed}
        alt="Reportes de Facturación"
      />
      <div>
        <Typography variant="h5" component="h3" align="center">
          Reportes de Facturación
        </Typography>
        <Typography variant="body2" align="center">
          Si su negocio requiere reportar ante la DIAN los consecutivos
          consumidos, <strong>Ergy POS</strong> le permite generar un reporte
          con toda la información de las ventas: el cliente, costo total,
          descuentos e impuestos detallados.
        </Typography>
      </div>
    </>,
  ]
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
        <ContentList items={items}></ContentList>
      </section>
      <section className={classes.section}>
        <Typography variant="h4" component="h2" align="center">
          Inventario
        </Typography>
        <ContentList items={items2}></ContentList>
      </section>
      <section className={classes.section}>
        <Typography variant="h4" component="h2" align="center">
          Inteligencia de Negocio
        </Typography>
        <ContentList items={items3}></ContentList>
      </section>
    </Layout>
  )
}

export default Characteristics
