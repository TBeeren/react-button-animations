import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import UnstyledButton from "../../internals/UnstyledButton/UnstyledButton"
import { ButtonSize } from "./ShapeButton.model"
import ShapeButton from "./ShapeButton"

export default {
  title: "ReactComponentLibrary/Buttons/ShapeButton",
  component: ShapeButton,
} as ComponentMeta<typeof ShapeButton>

const ShapeButtonTemplate: ComponentStory<typeof ShapeButton> = (args) => {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <UnstyledButton onClick={() => setIsToggled(!isToggled)}>
      <ShapeButton {...args} isToggled={isToggled}>
        Click me!
      </ShapeButton>
    </UnstyledButton>
  )
}

export const Example = ShapeButtonTemplate.bind({})
Example.args = {
  size: ButtonSize.MD,
  nParticles: 20,
}
