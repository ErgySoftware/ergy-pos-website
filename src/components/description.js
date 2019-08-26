import React from "react"
import Img from "gatsby-image"
import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import ContentList from "./ContentList"

export default function Description() {
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
  const items = [
    <>
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
    </>,
    <>
      <Img fixed={data.easyImage.childImageSharp.fixed} alt="Sencillez" />
      <div>
        <Typography variant="h3" align="center">
          Sencillez
        </Typography>
        <Typography variant="body1" align="center">
          Obtenga una experiencia intuitiva en nuestra plataforma diseñada para
          ser usada sin complicaciones ni dificultades
        </Typography>
      </div>
    </>,
    <>
      <Img fixed={data.portableImage.childImageSharp.fixed} alt="Rapidez" />
      <div>
        <Typography variant="h3" align="center">
          Portabilidad
        </Typography>
        <Typography variant="body1" align="center">
          Lleve su negocio en el bolsillo a cualquier lugar y en cualquier
          momento. No vuelva a perder una oportunidad de negocio por no tener la
          información a la mano.
        </Typography>
      </div>
    </>,
  ]
  return <ContentList items={items}></ContentList>
}
