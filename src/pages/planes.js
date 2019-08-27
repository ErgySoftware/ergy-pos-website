import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../theme"
import {
  makeStyles,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper,
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

const StyledItemText = withStyles({
  root: {
    textAlign: "center",
  },
})(ListItemText)

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
    },
    content: {
      display: "flex",
      padding: theme.spacing(2),
      height: "100%",
      flexFlow: "column",
      justifyContent: "space-between",
    },
  }),
  { defaultTheme: theme }
)
export default function Planes() {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Planes" />
      <section id="planes" className={classes.section}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="textPrimary"
        >
          PRECIOS
        </Typography>
        <Typography variant="subtitle1" align="center" color="textPrimary" s>
          Los primeros 45 días son <strong>gratis</strong> en cualquier plan, no
          se requiere tarjetas de credito para iniciar la prueba.
        </Typography>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={6} md={4} alignItems="stretch">
            <Paper className={classes.content} elevation={3}>
              <div>
                <Typography variant="h3" align="center" color="primary">
                  Inicial
                </Typography>
                <Typography variant="h5" align="center" color="textPrimary">
                  40 000{" "}
                  <Typography variant="caption" color="textSecondary">
                    COP/mes
                  </Typography>
                </Typography>
                <List dense={true}>
                  <ListItem>
                    <StyledItemText primary="Ventas Ilimitadas" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Productos Ilimitados" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Cajas Ilimitadas" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="3 usuarios" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Soporte por Correo" />
                  </ListItem>
                </List>
              </div>
              <Button variant="outlined" color="primary">
                Obtener
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} alignItems="stretch">
            <Paper className={classes.content} elevation={12}>
              <div>
                <Typography variant="h3" align="center" color="primary">
                  Crecimiento
                </Typography>
                <Typography variant="h5" align="center" color="textPrimary">
                  70 000{" "}
                  <Typography variant="caption" color="textSecondary">
                    COP/mes
                  </Typography>
                </Typography>
                <List dense={true}>
                  <ListItem>
                    <StyledItemText primary="Ventas Ilimitadas" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Productos Ilimitados" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Cajas Ilimitadas" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Usuarios Ilimitados" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Soporte telefónico y por correo" />
                  </ListItem>
                </List>
              </div>
              <Button variant="contained" color="primary">
                Obtener
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} alignItems="stretch">
            <Paper className={classes.content} elevation={3}>
              <div>
                <Typography variant="h3" align="center" color="primary">
                  On Premise
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary">
                  ¡PRONTO!
                </Typography>
                <List dense={true}>
                  <ListItem>
                    <StyledItemText primary="Ventas Ilimitadas" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Productos Ilimitados" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Cajas Ilimitadas" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Usuarios Ilimitados" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="Soporte por un año" />
                  </ListItem>
                  <ListItem>
                    <StyledItemText primary="API de integración" />
                  </ListItem>
                </List>
              </div>
              <Button color="primary" disabled>
                MUY PRONTO
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </Layout>
  )
}
