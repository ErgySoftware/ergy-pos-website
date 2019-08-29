import React, { useState } from "react"
import withRootTheme from "../withRootTheme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import RegisterForm from "../components/RegisterForm"

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
}))

const initialState = {
  email: "",
  owner: "",
  bussinessName: "",
  telephone: "",
  nit: "",
  plan: "Básico",
  billing: "Mensual",
}
const Obtener = ({ location }) => {
  const classes = useStyle()
  const { plan, billing } = location.state || {}
  const [formState, setFormState] = useState({
    ...initialState,
    plan: plan || "Básico",
    billing: billing || "Mensual",
  })
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState(null)
  const onChange = name => event => {
    const value = event.target.value
    if (value.length > 255) {
      errors[name] = "El valor de este campo es demasiado grande."
    } else {
      delete errors[name]
    }
    if (name === "email" && !value.match(/^.+@.+$/)) {
      errors[name] = "No parece un email válido"
    }
    setFormState({ ...formState, [name]: value })
    setErrors(errors)
  }
  function onDiscart() {
    setMessage(null)
  }
  async function onSubmit(event) {
    event.preventDefault()
    try {
      const result = await fetch(`${process.env.GATSBY_API_URL}/register`, {
        method: "post",
        body: JSON.stringify({ client: formState }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (result.status === 500) {
        throw new Error(
          "Sucedio un error inesperado mientras intentabamos registrar su cuenta"
        )
      }
      if (result.status === 400 || result.status === 422) {
        throw await result.json()
      }
      const response = await result.json()
      setMessage({ display: response.message, type: "success" })
    } catch (err) {
      if (err.message) {
        setMessage({ display: err.message, type: "error" })
      }
      if (Array.isArray(err.errors)) {
        const errors = err.errors // Convierte el arreglo de errores en un objeto
          .map(({ property, constraints }) => ({
            [property]: Object.values(constraints).join(", "),
          }))
          .reduce((a, b) => ({ ...a, ...b }), {})
        setErrors(errors)
      }
    }
  }
  return (
    <Layout>
      <SEO title="Obtener" />
      <section id="obtener" className={"section " + classes.section}>
        <Grid container justify="center">
          <Grid item className={classes.description} md={6}>
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
          <Grid item xs={12} md={6}>
            <Paper elevation={12} style={{ padding: "2rem" }}>
              <RegisterForm
                onChange={onChange}
                value={formState}
                errors={errors}
                onSubmit={onSubmit}
                onDiscart={onDiscart}
                message={message}
              />
            </Paper>
          </Grid>
        </Grid>
      </section>
    </Layout>
  )
}
export default withRootTheme(Obtener)
