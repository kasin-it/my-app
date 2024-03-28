import { Input } from "@/components/ui/input"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

const meta = {
   title: "Input",
   component: Input,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      placeholder: { control: "text" },
      disabled: { control: "boolean" },
   },
   args: { onClick: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Disabled: Story = {
   args: {
      placeholder: "Input",
      disabled: true,
   },
}
