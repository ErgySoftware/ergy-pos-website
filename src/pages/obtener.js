import React from "react"
import withRootTheme from "../withRootTheme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Paper,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import MyLink from "../components/MyLink"

const useStyle = makeStyles(theme => ({
  section: {
    background: theme.palette.background.gradient,
  },
  description: {
    display: "none",
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  row: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    "& div:nth-child(odd)": {
      paddingRight: theme.spacing(),
    },
    "& div:nth-child(even)": {
      paddingLeft: theme.spacing(),
    },
  },
}))

const Obtener = () => {
  const classes = useStyle()
  return (
    <Layout>
      <SEO title="Obtener" />
      <section id="obtener" className={"section " + classes.section}>
        <Grid container justify="center">
          <Grid item className={classes.description} xs={6}>
            <Typography component="div">
              <Typography component="h1" variant="h3">
                Obtenga Gratis los primeros 45 días
              </Typography>
              <Typography variant="body1">
                <strong>Ergy POS</strong> lleva su negocio al siguiente nivel.
                Controle sus ventas desde cualquier lugar de forma rápida,
                efectiva y sencilla.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={12} style={{ padding: 10 }}>
              <form id="register">
                <FormGroup>
                  <FormControl required>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" placeholder="pepito@ejemplo.com" />
                  </FormControl>
                  <FormControl required>
                    <InputLabel htmlFor="owner">Nombre y Apellidos</InputLabel>
                    <Input id="owner" placeholder="Pedro Pérez" />
                  </FormControl>
                  <FormControl required>
                    <InputLabel htmlFor="bussinessName">
                      Nombre de su Negocio
                    </InputLabel>
                    <Input
                      id="bussinessName"
                      placeholder="Ferretería El Campeón"
                    />
                  </FormControl>
                  <FormControl required>
                    <InputLabel htmlFor="telephone">
                      Número de Teléfono
                    </InputLabel>
                    <Input id="telephone" />
                  </FormControl>
                  <FormControl required>
                    <InputLabel htmlFor="nit">Identificación</InputLabel>
                    <Input
                      id="nit"
                      aria-describedby="nit-helper"
                      placeholder="888555111-0"
                    />
                    <FormHelperText id="id-helper">
                      El NIT de su negocio
                    </FormHelperText>
                  </FormControl>
                </FormGroup>
                <FormGroup row classes={{ row: classes.row }}>
                  <FormControl required style={{ width: "50%" }}>
                    <InputLabel htmlFor="plan">Plan</InputLabel>
                    <Select
                      value={"Básico"}
                      onChange={() => {}}
                      inputProps={{
                        name: "plan",
                        id: "plan",
                      }}
                    >
                      <MenuItem value={"Básico"}>Básico</MenuItem>
                      <MenuItem value={"Premium"}>Premium</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl required style={{ width: "50%" }}>
                    <InputLabel htmlFor="billing">Facturación</InputLabel>
                    <Select
                      value={"Mensual"}
                      onChange={() => {}}
                      inputProps={{
                        name: "billing",
                        id: "billing",
                      }}
                    >
                      <MenuItem value={"Mensual"}>Mensual</MenuItem>
                      <MenuItem value={"Anual"}>Anual</MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
                <div style={{ textAlign: "center" }}>
                  <Button variant="contained" color="primary" size="large">
                    Empezar
                  </Button>
                  <Typography variant="subtitle2">
                    Al hacer click acepta nuestros{" "}
                    <MyLink>términos y condiciones</MyLink>.
                  </Typography>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </Layout>
  )
}
export default withRootTheme(Obtener)
