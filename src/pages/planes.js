import React, { useState } from "react"
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
  Switch,
  FormGroup,
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import classNames from "classnames"

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
    priceSection: {
      background: theme.palette.background.gradient,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
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
  const [billYearly, setBillYearly] = useState(false)
  return (
    <Layout>
      <SEO title="Planes" />
      <section id="planes">
        <div className={classes.section}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            color="primary"
          >
            PRECIOS
          </Typography>
          <Typography variant="subtitle1" align="center" color="textPrimary">
            Los primeros 45 días son <strong>gratis</strong> en cualquier plan,
            no se requiere tarjetas de credito para iniciar la prueba.
          </Typography>
          <FormGroup style={{ alignItems: "center" }}>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="body1" color="secondary">
                    Mensual
                  </Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={billYearly}
                    onChange={() => setBillYearly(!billYearly)}
                    value="yearly"
                    inputProps={{
                      "aria-label": billYearly
                        ? "Facturar Anualmente"
                        : "Facturar Mensualmente",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="secondary">
                    Anual <strong>¡2 meses gratis!</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </FormGroup>
        </div>
        <div className={classNames(classes.section, classes.priceSection)}>
          <Grid container spacing={3} alignItems="stretch" justify="center">
            <Grid item xs={12} md={6} lg={4}>
              <Paper className={classes.content} elevation={3}>
                <div>
                  <Typography variant="h3" align="center" color="secondary">
                    Básica
                  </Typography>
                  <Typography variant="h5" align="center" color="textPrimary">
                    {billYearly ? "400 000" : "40 000"}
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
            <Grid item xs={12} md={6} lg={4}>
              <Paper className={classes.content} elevation={24}>
                <div>
                  <Typography variant="h3" align="center" color="secondary">
                    Premium
                  </Typography>
                  <Typography variant="h5" align="center" color="textPrimary">
                    {billYearly ? "700 000" : "70 000"}
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
            <Grid item xs={12} md={6} lg={4}>
              <Paper className={classes.content} elevation={3}>
                <div>
                  <Typography variant="h3" align="center" color="textPrimary">
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
        </div>
      </section>
    </Layout>
  )
}
