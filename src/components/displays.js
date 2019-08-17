import React, { useState, useEffect } from "react"
import classNames from "classnames"
import styles from "./displays.module.css"
import DesktopEditedRecording from "../assets/DesktopEditedRecording.mp4"
import IpadEditedRecording from "../assets/IpadEditedRecording.mp4"
import IphoneEditedRecording from "../assets/IphoneEditedRecording.mp4"
import Computer from "../assets/computer.png"
import useBreakpoint from "./hooks/useBreakpoint"
import Tablet from "./tablet"

function useLoaded() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => {
      if (!loaded) {
        setLoaded(true) //Muestra videos cuando termine de descargar la imagen o luego de 1 segundo
      }
    }, 1000)
    return () => {
      clearTimeout(id)
    }
  }, [])
  return [loaded, setLoaded]
}

export default function Displays() {
  const [loaded, setLoaded] = useLoaded()
  const matches = useBreakpoint("xl")
  return (
    <div style={{ maxWidth: 600 }}>
      {!matches && <Tablet />}
      {matches && (
        <React.Fragment>
          <div
            className={classNames(styles.display, styles.pc, {
              [styles.hide]: !loaded,
            })}
          >
            <video
              autoPlay
              loop
              muted
              aria-label="Ergy POS funcionando en computador de escritorio"
            >
              <source src={DesktopEditedRecording} type="video/mp4"></source>
            </video>
          </div>
          <div
            className={classNames(styles.display, styles.ipad, {
              [styles.hide]: !loaded,
            })}
          >
            <video
              autoPlay
              loop
              muted
              aria-label="Ergy POS funcionando en tablet"
            >
              <source src={IpadEditedRecording} type="video/mp4"></source>
            </video>
          </div>
          <div
            className={classNames(styles.display, styles.iphone, {
              [styles.hide]: !loaded,
            })}
          >
            <video
              autoPlay
              loop
              muted
              aria-label="Ergy POS funcionando en smartphone"
            >
              <source src={IphoneEditedRecording} type="video/mp4"></source>
            </video>
          </div>
          <img
            src={Computer}
            alt="Computador, tablet y celular"
            onLoad={() => setLoaded(true)}
          ></img>
        </React.Fragment>
      )}
    </div>
  )
}
