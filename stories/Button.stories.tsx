import { Button } from "@/components/ui/button"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

const meta = {
   title: "Button",
   component: Button,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      children: { control: "text" },
      variant: {
         control: "select",
         options: [
            "default",
            "secondary",
            "outline",
            "ghost",
            "link",
            "destructive",
         ],
      },
      size: { control: "radio", options: ["default", "icon", "sm", "lg"] },
      disabled: { control: "boolean" },
      asChild: { control: "boolean" },
   },
   args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   args: {
      variant: "default",
      children: "Button",
   },
}
export const Secondary: Story = {
   args: {
      variant: "secondary",
      children: "Button",
   },
}
export const Large: Story = {
   args: {
      variant: "default",
      children: "Button",
      size: "lg",
   },
}
export const Small: Story = {
   args: {
      variant: "default",
      children: "Button",
      size: "sm",
   },
}
