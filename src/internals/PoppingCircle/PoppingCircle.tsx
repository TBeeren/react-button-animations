import React from "react"
import PropTypes from "prop-types"
import { animated, useSpring } from "react-spring"

import { useUniqueId } from "../../hooks"

import SvgWrapper from "../SvgWrapper"
import { PoppingCircleProps } from "./PoppingCircle.model"

const propTypes = {
  size: PropTypes.number,
}

const defaultProps = {
  size: 40,
  color: "#DF5FFF99",
  tension: 500,
  friction: 60,
  mass: 0.5,
}

const PoppingCircle = ({ size, color }: PoppingCircleProps) => {
  const id = useUniqueId("popping-circle")

  const outerRingProps = useSpring({
    radius: 20,
    from: { radius: 0 },
    config: {
      tension: 800,
      friction: 60,
      mass: 0.5,
    },
  })

  const innerRingProps = useSpring({
    radius: 20,
    from: { radius: 0 },
    delay: 110,
    config: {
      tension: 1300,
      friction: 90,
      mass: 1,
    },
  })

  return (
    <SvgWrapper
      width={size}
      height={size}
      viewBox="0 0 40 40"
      hideOverflow={false}
    >
      <defs>
        <mask id={id}>
          <rect x={-20} y={-20} width={80} height={80} fill="#FFF" />
          <animated.circle
            cx={20}
            cy={20}
            r={innerRingProps.radius.to((radius) => radius + 0.4)}
            fill="#000"
          />
        </mask>
      </defs>

      <animated.circle
        cx={20}
        cy={20}
        r={outerRingProps.radius.to((radius) => radius)}
        fill={color}
        mask={`url(#${id})`}
      />
    </SvgWrapper>
  )
}

PoppingCircle.propTypes = propTypes
PoppingCircle.defaultProps = defaultProps

export default PoppingCircle
