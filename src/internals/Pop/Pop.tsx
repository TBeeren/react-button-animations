import React from "react"
import { animated, useSpring } from "react-spring"
import { PopProps } from "./Pop.model"

const Pop = ({ children, isToggled }: PopProps) => {
  const open = useSpring({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: `scale(1)`,
    },
    config: {
      tension: 200,
      friction: 12,
    },
    delay: 175,
  })

  const close = useSpring({
    from: {
      transform: "scale(1), opacity 0.5s linear, display 1ms",
      opacity: 1,
    },
    to: {
      transform: `scale(0), opacity 0.5s linear, display 1ms`,
      display: "none",
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 12,
    },
    delay: 175,
  })

  const openBorder = useSpring({
    transform: `scale(1)`,
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 200,
      friction: 12,
    },
    delay: 50,
  })

  return (
    <>
      <animated.div style={isToggled ? open : close}>{children}</animated.div>
      {!isToggled && <animated.div style={openBorder}>{children}</animated.div>}
    </>
  )
}

export default Pop
