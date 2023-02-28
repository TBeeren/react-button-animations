import React, { ReactNode } from "react"

export interface SvgButtonProps {
  active?: boolean
  animation?: ButtonAnimation
  children?: ReactNode
  colorSchema?: ColorSchema
  fillPath: string
  href?: string
  isToggled?: Boolean
  nParticles?: number
  size?: ButtonSize
  styleOverride?: React.CSSProperties
  strokePath: string
  target?: string
}

export enum ButtonSize {
  SM = 20,
  MD = 40,
  LG = 80,
}

export interface ButtonAnimation {
  type: ButtonAnimationType
}

export enum ButtonAnimationType {
  FLARE,
  GLOW,
  PARTICLES,
  POP,
}

export interface ColorSchema {
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
}
