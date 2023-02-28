import React from "react"

import SvgWrapper from "../SvgWrapper"
import { SvgProps } from "./Svg.model"

const Svg = ({ size, isToggled, strokePath, fillPath }: SvgProps) => (
  <SvgWrapper
    viewBox="0 0 24 24"
    hideOverflow={false}
    style={{
      width: size,
      strokeWidth: "1px",
    }}
  >
    <path
      d={isToggled ? fillPath : strokePath}
      fill={isToggled ? "rgb(224, 36, 94)" : "rgb(0,0,0)"}
    />
  </SvgWrapper>
)

export default Svg
