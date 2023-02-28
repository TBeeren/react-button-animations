import React from "react"
import { render } from "@testing-library/react"
import ShapeButton from "./ShapeButton"

describe("ShapeButton", () => {
  test("renders the ShapeButton component", () => {
    render(<ShapeButton>Button</ShapeButton>)
  })
})
