import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"

import type { Meta as MetaObj, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof Select>
type Meta = MetaObj<typeof Select>

export const Default: Story = {
   parameters: {
      layout: "centered",
   },
   args: {
      children: (
         <>
            <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="light">Light</SelectItem>
               <SelectItem value="dark">Dark</SelectItem>
               <SelectItem value="system">System</SelectItem>
            </SelectContent>
         </>
      ),
   },
}

export default { component: Select } as Meta
