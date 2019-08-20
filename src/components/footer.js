import React from "react"
import MyLink from "./MyLink"
import { Grid, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWhatsappSquare,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.black,
  },
  compactList: {
    "& li": {
      margin: 0,
      padding: 0,
    },
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

function formatPhone(phone) {
  const pattern = "+(##) ### #######"
  phone = phone.toString()
  let i = 0
  return pattern.replace(/#/g, _ => phone[i++])
}

export default function Footer({ phone, mail, message }) {
  const classes = useStyles()
  const formattedPhone = formatPhone(phone)
  return (
    <footer className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} lg={4} className={classes.block}>
          <Typography variant="h6">Sobre Nosotros</Typography>
          <Typography variant="body2">
            <strong>Ergy POS</strong> es un Software diseñado para sistematizar
            y mejorar gestión de sus puntos de venta. Con nuestro sistema podrá
            realizar ventas y envíos, gestionar inventario y clientes, manejar
            sus proveedores, pedidos y tomar decisiones basado en datos y
            estadisticas precisas.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.block}>
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
        <Grid item xs={12} sm={12} lg={4} className={classes.block}>
          <Typography variant="h6">Contacto</Typography>
          <dl>
            <dt>Comercial</dt>
            <dd>
              <ul className={classes.compactList}>
                <li>
                  <Link
                    underline="hover"
                    color="inherit"
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(
                      message
                    )}`}
                  >
                    <FontAwesomeIcon icon={faWhatsappSquare}></FontAwesomeIcon>{" "}
                    {formattedPhone}
                  </Link>
                </li>
                <li>
                  <Link
                    underline="hover"
                    color="inherit"
                    target="_blank"
                    href={"mailto:" + mail}
                  >
                    <FontAwesomeIcon icon="envelope"></FontAwesomeIcon> {mail}
                  </Link>
                </li>
              </ul>
            </dd>
            <dt>Social</dt>
            <dd>
              <Link
                color="inherit"
                target="_blank"
                href="https://www.facebook.com/SoftwareErgy/"
              >
                <Typography variant="srOnly">Facebook Ergy</Typography>
                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
              </Link>
              <Link
                style={{ marginLeft: 10 }}
                color="inherit"
                target="_blank"
                href="https://www.instagram.com/ergysoftware/"
              >
                <Typography variant="srOnly">Instagram Ergy</Typography>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </Link>
            </dd>
          </dl>
        </Grid>
      </Grid>
    </footer>
  )
}
