import React from "react"
import PropTypes from "prop-types"
import {
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Select,
  MenuItem,
  Button,
  Link,
  SnackbarContent,
  IconButton,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheckCircle,
  faTimes,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"
import { green } from "@material-ui/core/colors"
import classNames from "classnames"

const useStyle = makeStyles(theme => ({
  noMostrarNunca: {
    display: "none",
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

function FormInputElement(props) {
  const { error, value, onChange, id, name, placeholder } = props
  let { helperText } = props
  if (error) {
    helperText = error
  }
  return (
    <FormControl required error={!!error}>
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <Input
        id={id}
        placeholder={placeholder}
        value={value}
        aria-describedby={helperText ? `${id}-helper` : null}
        onChange={onChange}
      />
      {helperText ? (
        <FormHelperText id={`${id}-helper`}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}

const useMessageStyles = makeStyles(theme => ({
  container: {
    flexFlow: "row",
    marginBottom: theme.spacing(1),
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  hidden: {
    width: "1px",
    height: "1px",
    overflow: "hidden",
    border: "none",
    position: "absolute",
    padding: 0,
    backgroundColor: "rgba(50,50,50,0)",
  },
}))

function FormMessage(props) {
  const { variant, message, onClose, hidden, ...rest } = props
  const classes = useMessageStyles(props)
  return (
    <SnackbarContent
      className={classNames(classes.container, classes[variant], {
        [classes.hidden]: hidden,
      })}
      aria-describedby="client-snackbar"
      role="alert"
      aria-atomic="true"
      message={
        <span
          id="client-snackbar"
          aria-hidden={hidden}
          className={classes.message}
        >
          <FontAwesomeIcon
            icon={variant === "success" ? faCheckCircle : faExclamationCircle}
            className={classNames(classes.icon, classes.iconVariant)}
          />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} className={classes.icon} />
        </IconButton>,
      ]}
      {...rest}
    />
  )
}

function RegisterForm(props) {
  const classes = useStyle(props)
  const { errors, onChange, value, onSubmit, message, onDiscart } = props
  const { display, type } = message || {}
  return (
    <form id="register" name="register" onSubmit={onSubmit}>
      <FormMessage
        message={display}
        variant={type}
        hidden={!message}
        onClose={onDiscart}
      />
      <FormGroup>
        <FormInputElement
          error={errors.email}
          onChange={onChange("email")}
          id="email"
          name="Email"
          placeholder="pepito@ejemplo.com"
          value={value.email}
        />
        <FormInputElement
          error={errors.owner}
          onChange={onChange("owner")}
          id="owner"
          name="Nombre y Apellidos"
          placeholder="Pedro Pérez"
          value={value.owner}
        />
        <FormInputElement
          error={errors.bussinessName}
          onChange={onChange("bussinessName")}
          id="bussinessName"
          name="Nombre de su Negocio"
          placeholder="Ferretería El Proveedor"
          value={value.bussinessName}
        />
        <FormInputElement
          error={errors.telephone}
          onChange={onChange("telephone")}
          id="telephone"
          name="Número de Teléfono"
          value={value.telephone}
        />
        <FormInputElement
          error={errors.nit}
          onChange={onChange("nit")}
          id="nit"
          name="Identificación"
          placeholder="888555111-0"
          value={value.nit}
          helperText="El NIT de su negocio"
        />
      </FormGroup>
      <FormGroup row classes={{ row: classes.row }}>
        <FormControl required style={{ width: "50%" }}>
          <InputLabel htmlFor="plan">Plan</InputLabel>
          <Select
            value={value.plan}
            onChange={onChange("plan")}
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
            value={value.billing}
            onChange={onChange("billing")}
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          form="register"
        >
          Empezar
        </Button>
        <p className={classes.noMostrarNunca}>
          <label>
            No llenes esto si eres humano:{" "}
            <input
              name="lastName"
              id="lastName"
              value={value.lastName}
              onChange={onChange("lastName")}
              tabIndex="-1"
              autoComplete="off"
            />
          </label>
        </p>
        <Typography variant="subtitle2">
          Al hacer click acepta nuestros{" "}
          <Link href="/terminos-y-condiciones/" target="_blank">
            términos y condiciones
          </Link>
          .
        </Typography>
      </div>
    </form>
  )
}

RegisterForm.propTypes = {
  value: PropTypes.shape({
    email: PropTypes.string,
    owner: PropTypes.string,
    bussinessName: PropTypes.string,
    telephone: PropTypes.string,
    nit: PropTypes.string,
    plan: PropTypes.string,
    billing: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string),
  message: PropTypes.shape({
    type: PropTypes.oneOf(["error", "success"]).isRequired,
    display: PropTypes.string.isRequired,
  }),
  onDiscart: PropTypes.func.isRequired,
}

export default RegisterForm
