import React from "react"
import MyLink from "./MyLink"
import { Grid, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.black,
  },
  block: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.getContrastText(theme.palette.common.black),
    "& h6": {
      marginBottom: theme.spacing(2),
    },
    "& ul": {
      margin: 0,
      listStyle: "none",
    },
  },
}))

export default function Footer({ phone, mail, message }) {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} className={classes.block}>
          <Typography variant="h6">Sobre Nosotros</Typography>
          <Typography variant="body1">
            <strong>Ergy POS</strong> es un Software diseñado para sistematizar
            y mejorar gestión de sus puntos de venta. Con nuestro sistema podrá
            realizar ventas y envíos, gestionar inventario y clientes, manejar
            sus proveedores, pedidos y tomar decisiones basado en datos y
            estadisticas precisas.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.block}>
          <Typography variant="h6">El Producto</Typography>
          <ul>
            <li>
              <MyLink to="/" underline="hover" color="inherit">
                Obtener
              </MyLink>
            </li>
            <li>
              <MyLink to="/" underline="hover" color="inherit">
                Características
              </MyLink>
            </li>
            <li>
              <MyLink to="/" underline="hover" color="inherit">
                Planes
              </MyLink>
            </li>
            <li>
              <MyLink to="/" underline="hover" color="inherit">
                Documentación
              </MyLink>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.block}>
          <Typography variant="h6">Contacto</Typography>
          <Typography variant="body2">
            <dl>
              <dt>Comercial</dt>
              <dd>
                <ul>
                  <li>
                    <Link
                      underline="hover"
                      color="inherit"
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(
                        message
                      )}`}
                    >
                      <FontAwesomeIcon
                        icon={faWhatsappSquare}
                      ></FontAwesomeIcon>{" "}
                      <span> {phone} </span>
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon="envelope"></FontAwesomeIcon>{" "}
                    <a href={"mailto:" + mail}>{mail}</a>
                  </li>
                </ul>
              </dd>
            </dl>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}
