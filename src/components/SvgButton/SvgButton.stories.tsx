import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ButtonSize } from "./SvgButton.model"

import UnstyledButton from "../../internals/UnstyledButton/UnstyledButton"
import SvgButton from "./SvgButton"

const strokePath =
  "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"

const fillPath =
  "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"

export default {
  title: "ReactComponentLibrary/Buttons/SvgButton",
  component: SvgButton,
} as ComponentMeta<typeof SvgButton>

const SvgButtonTemplate: ComponentStory<typeof SvgButton> = (args) => {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <UnstyledButton onClick={() => setIsToggled(!isToggled)}>
      <SvgButton
        {...args}
        isToggled={isToggled}
        fillPath={fillPath}
        strokePath={strokePath}
      />
    </UnstyledButton>
  )
}

export const SvgButtonExport = SvgButtonTemplate.bind({})
SvgButtonExport.args = {
  size: ButtonSize.MD,
  nParticles: 20,
}
