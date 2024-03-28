import { Label } from "@/components/ui/label"
import type { Meta as MetaObj, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof Label>
type Meta = MetaObj<typeof Label>

export const Default: Story = {
   parameters: {
      layout: "centered",
   },
   args: {
      children: "Label",
   },
}

export default { component: Label } as Meta
