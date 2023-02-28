import React from "react"
import styled from "styled-components"
import { ButtonSize, ShapeButtonProps } from "./ShapeButton.model"

// Components
import BackgroundAnimation from "../../internals/BackgroundAnimation"
import ShapeAnimation from "../../internals/ShapeAnimation"
import { ShapeButtonTransition } from "../../internals/ShapeAnimation/ShapeAnimation.model"

const ShapeButton = ({
  size = ButtonSize.MD,
  href,
  active = true,
  target,
  nParticles = 20,
  isToggled = false,
  children,
  context,
  styleOverride,
  colorSchema,
}: ShapeButtonProps) => {
  return (
    <Wrapper
      style={Object.assign({}, { width: size, height: size }, styleOverride)}
    >
      <BackgroundAnimation isToggled={isToggled} size={size} />
      <ShapeAnimation
        isToggled={isToggled}
        transition={ShapeButtonTransition.POP}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ShapeButton
