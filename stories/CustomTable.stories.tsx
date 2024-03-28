import CustomTable from "@/components/cutom-table/custom-table"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
   title: "CustomTable",
   component: CustomTable,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      status: {
         control: "radio",
         options: ["error", "noItems", "ok", "loading"],
      },
   },
} satisfies Meta<typeof CustomTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      data: [
         { name: "First Item", count: 100 },
         { name: "Second Item", count: 100 },
         { name: "Third Item", count: 100 },
         { name: "Fourth Item", count: 100 },
         { name: "Fifth Item", count: 100 },
      ],
      status: "ok",
   },
}
