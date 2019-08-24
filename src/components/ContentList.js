import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"

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
    [theme.breakpoints.up("xxl")]: {
      justifyContent: "space-between",
      "& div:nth-child(2)": {
        marginTop: theme.spacing(),
        width: "80%",
      },
    },
  },
}))
function ContentList(props) {
  const classes = useStyles()
  return (
    <Grid container>
      {props.items.map((Item, key) => (
        <Grid item xs={12} className={classes.description} key={key}>
          {Item}
        </Grid>
      ))}
    </Grid>
  )
}
ContentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default ContentList
