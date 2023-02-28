import React from "react"
import styled from "styled-components"
import { ButtonSize, SvgButtonProps } from "./SvgButton.model"

// Components
import BackgroundAnimation from "../../internals/BackgroundAnimation"
import SvgAnimation from "../../internals/SvgAnimation"
import { SvgButtonTransition } from "../../internals/SvgAnimation/SvgAnimation.model"

const SvgButton = ({
  size = ButtonSize.MD,
  href,
  active = true,
  target,
  nParticles,
  isToggled = false,
  children,
  styleOverride,
  colorSchema,
  fillPath,
  strokePath,
}: SvgButtonProps) => {
  return (
    <Wrapper
      style={Object.assign({}, { width: size, height: size }, styleOverride)}
    >
      <BackgroundAnimation
        isToggled={isToggled}
        size={size}
        nParticles={nParticles}
      />
      <SvgAnimation
        isToggled={isToggled}
        size={size}
        fillPath={fillPath}
        strokePath={strokePath}
        transition={SvgButtonTransition.POP}
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

export default SvgButton
