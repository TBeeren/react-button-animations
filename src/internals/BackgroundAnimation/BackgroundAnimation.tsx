import React from "react"
import styled from "styled-components"
import { range } from "../../utils/calc"
import { BackgroundAnimationProps } from "./BackgroundAnimation.model"

// Components
import PoppingCircle from "../PoppingCircle"
import ConfettiPiece from "../ConfettiPiece"

const BackgroundAnimations = ({
  isToggled = false,
  nParticles = 20,
  size = 20,
  color = "red",
}: BackgroundAnimationProps) => {
  return (
    <Background>
      {isToggled && <PoppingCircle size={size} color={color} />}

      {isToggled &&
        range(nParticles).map((i) => (
          <ConfettiPiece parentSize={size} key={i} />
        ))}
    </Background>
  )
}

const Background = styled.div`
  position: absolute;
  z-index: 0;
`

export default BackgroundAnimations
