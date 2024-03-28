import {
   Table,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import type { Meta as MetaObj, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof Table>
type Meta = MetaObj<typeof Table>

export const Default: Story = {
   parameters: {
      layout: "centered",
   },
   args: {
      children: (
         <>
            <TableHeader>
               <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Count</TableHead>
               </TableRow>
               <TableRow>
                  <TableCell>Item 1</TableCell>
                  <TableCell>100</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>Item 2</TableCell>
                  <TableCell>100</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>Item 3</TableCell>
                  <TableCell>100</TableCell>
               </TableRow>
            </TableHeader>
         </>
      ),
   },
}

export default { component: Table } as Meta
