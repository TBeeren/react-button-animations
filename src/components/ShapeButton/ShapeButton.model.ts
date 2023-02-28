import React, { ReactNode } from "react"

export interface ShapeButtonProps {
  active?: boolean
  animation?: ButtonAnimation
  children?: ReactNode
  colorSchema?: ColorSchema
  context?: ButtonContext
  href?: string
  isToggled?: Boolean
  nParticles?: number
  size?: ButtonSize
  styleOverride?: React.CSSProperties
  target?: string
}

export enum ButtonSize {
  SM = 20,
  MD = 40,
  LG = 80,
}

export interface ButtonContext {
  shape?: ButtonShape
  svg?: ReactNode
  icon?: ReactNode
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

export enum ButtonShape {
  RECTANGLE,
  CIRCLE,
  THREE_DIMENSIONAL,
}

export interface ColorSchema {
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
}
