import React from "react"

export const useUniqueId = (prefix: string) => {
  const uniqueId = String(Math.random()).slice(2)
  const ref = React.useRef(`${prefix}${uniqueId}`)

  return ref.current
}
