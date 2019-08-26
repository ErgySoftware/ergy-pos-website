import { useState, useEffect } from "react"

export default function useRouteInfo() {
  const [routeInfo, setRouteInfo] = useState(getRoute())
  useEffect(() => {
    function onRouteChange() {
      setRouteInfo(getRoute())
    }
    window.addEventListener("hashchange", onRouteChange)
    return () => {
      window.removeEventListener("hashchange", onRouteChange)
    }
  }, [])
  return routeInfo
}

function getRoute() {
  const location = window.location
  const path = location.pathname
  let search = location.search
  search = search ? search.substring(1) : search // Elimina el primer "?"
  search = search
    .split("&")
    .map(toKeyValue)
    .reduce(toMap, new Map())
  return { path, search }
}

function toKeyValue(param) {
  return param.split("=")
}

function toMap(map, keyValuePair) {
  map.set(keyValuePair[0], keyValuePair[1])
  return map
}
