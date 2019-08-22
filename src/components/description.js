import React from "react"
import Img from "gatsby-image"
import { Typography, Grid } from "@material-ui/core"
import { useStaticQuery } from "gatsby"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  description: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      flexFlow: "row",
      "&:nth-child(even)": {
        flexFlow: "row-reverse",
      },
      "& div:nth-child(2)": {
        marginTop: theme.spacing(),
        width: "60%",
      },
    },
  },
}))

export default function description() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      speedImage: file(relativePath: { eq: "speed.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      easyImage: file(relativePath: { eq: "easy.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      portableImage: file(relativePath: { eq: "tablet.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Grid container>
      <Grid item xs={12} className={classes.description}>
        <Img fixed={data.speedImage.childImageSharp.fixed} alt="Rapidez" />
        <div>
          <Typography variant="h3" align="center">
            Rapidez
          </Typography>
          <Typography variant="body1" align="center">
            Maximice la atención al cliente a la hora de vender con nuestra
            interfaz rápida e intuitiva.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Img fixed={data.easyImage.childImageSharp.fixed} alt="Sencillez" />
        <div>
          <Typography variant="h3" align="center">
            Sencillez
          </Typography>
          <Typography variant="body1" align="center">
            Obtenga una experiencia intuitiva en nuestra plataforma diseñada
            para ser usada sin complicaciones ni dificultades
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Img fixed={data.portableImage.childImageSharp.fixed} alt="Rapidez" />
        <div>
          <Typography variant="h3" align="center">
            Portabilidad
          </Typography>
          <Typography variant="body1" align="center">
            Lleve su negocio en el bolsillo a cualquier lugar y en cualquier
            momento. No vuelva a perder una oportunidad de negocio por no tener
            la información a la mano.
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}
