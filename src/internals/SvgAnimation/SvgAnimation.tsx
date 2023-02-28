import React, { ReactNode } from "react"
import styled from "styled-components"

// Components
import { SvgAnimationProps, SvgButtonTransition } from "./SvgAnimation.model"
import Pop from "../Pop"
import Svg from "../Svg"
import { ButtonSize } from "../../components/SvgButton/SvgButton.model"

const SvgAnimation = ({
  size,
  isToggled,
  transition,
  fillPath,
  strokePath,
}: SvgAnimationProps) => {
  return (
    <Foreground>
      {isToggled &&
        transitionAnimation(transition, size, fillPath, strokePath, isToggled)}
      {!isToggled &&
        transitionAnimation(transition, size, fillPath, strokePath, isToggled)}
    </Foreground>
  )
}

const transitionAnimation = (
  transition: SvgButtonTransition | undefined,
  size: ButtonSize,
  fillPath: string,
  strokePath: string,
  isToggled: Boolean,
): ReactNode => {
  switch (transition) {
    case SvgButtonTransition.POP:
      return (
        <Pop isToggled={isToggled}>
          <Svg
            size={size}
            fillPath={fillPath}
            strokePath={strokePath}
            isToggled={isToggled}
          ></Svg>
        </Pop>
      )
    default:
      return (
        <Svg
          size={size}
          fillPath={fillPath}
          strokePath={strokePath}
          isToggled={isToggled}
        ></Svg>
      )
  }
}

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`

export default SvgAnimation
