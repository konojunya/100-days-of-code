import React from "react"
import { storiesOf } from "@storybook/react";
import Button from "../src/Button"

storiesOf("Button", module)
.add("with text", () => (
  <Button text="Hello World" />
))
.add("with emoji", () => (
  <Button text="😄😄😄" />
))