import React, { useRef } from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import classNames from "classnames"
import { Slide } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import useFirstViewable from "./hooks/useFirstViewable"

const useStyles = makeStyles(theme => ({
  description: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      flexFlow: "row",
      "& div:nth-child(2)": {
        marginTop: theme.spacing(),
        width: "60%",
      },
    },
    [theme.breakpoints.up("xxl")]: {
      justifyContent: "space-between",
      "& div:nth-child(2)": {
        marginTop: theme.spacing(),
        width: "80%",
      },
    },
  },
  reversed: {
    [theme.breakpoints.up("lg")]: {
      flexFlow: "row-reverse !important",
    },
  },
}))
function ContentList(props) {
  const items = props.items.map((Item, key) => (
    <ContentItem key={key} Item={Item} reversed={key % 2 !== 0}></ContentItem>
  ))
  return <Grid container>{items}</Grid>
}

function ContentItem({ Item, reversed }) {
  const classes = useStyles()
  const ref = useRef()
  const isViewable = useFirstViewable(ref)
  return (
    <Grid item xs={12} ref={ref}>
      <Slide
        direction={reversed ? "right" : "left"}
        in={isViewable}
        timeout={800}
      >
        <div
          className={classNames(classes.description, {
            [classes.reversed]: reversed,
          })}
        >
          {Item}
        </div>
      </Slide>
    </Grid>
  )
}
ContentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default ContentList
