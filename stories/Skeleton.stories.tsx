import { Skeleton } from "@/components/ui/skeleton"
import type { Meta as MetaObj, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof Skeleton>
type Meta = MetaObj<typeof Skeleton>

export const Default: Story = {
   parameters: {
      layout: "centered",
   },
   args: {
      style: { width: "100px", height: "100px" },
   },
}

export default { component: Skeleton } as Meta
