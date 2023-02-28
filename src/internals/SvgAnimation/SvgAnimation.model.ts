import { ButtonSize } from "../../components/SvgButton/SvgButton.model"

export interface SvgAnimationProps {
  size: ButtonSize
  isToggled: Boolean
  transition?: SvgButtonTransition
  fillPath: string
  strokePath: string
}

export enum SvgButtonTransition {
  POP,
}
