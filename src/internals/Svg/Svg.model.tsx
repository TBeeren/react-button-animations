import { ButtonSize } from "../../components/SvgButton/SvgButton.model"

export interface SvgProps {
  size: ButtonSize
  isToggled: Boolean
  strokePath: string
  fillPath: string
}
