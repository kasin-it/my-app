"use client"

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
} from "@/components/ui/select"
import { useTableStore } from "@/hooks/use-table"
import { SortDirection } from "@/types"
import { Label } from "../ui/label"
import lodash from "lodash"
import { Input } from "../ui/input"
import { ChangeEvent } from "react"

function TableActions() {
   const { order, setOrder, pageSize, setPageSize } = useTableStore()

   const debouncedSetPageSize = lodash.debounce(
      async (event: React.ChangeEvent<HTMLInputElement>) => {
         setPageSize(parseInt(event.target.value) || 0)
      },
      300
   )

   const handleNumberOfRowsChange = async (
      event: ChangeEvent<HTMLInputElement>
   ) => {
      event.target.value = event.target.value.replace(/[^0-9]/g, "")

      if (+event.target.value > 100) {
         event.target.value = ""
      } else {
         event.target.value = event.target.value || ""
      }

      debouncedSetPageSize(event)
   }

   return (
      <>
         <div>
            <Label>Number of rows in table: ({pageSize || 0})</Label>
            <Input
               onChange={(event) => handleNumberOfRowsChange(event)}
               defaultValue={pageSize}
               placeholder="Number of rows"
            />
         </div>
         <div>
            <Label>Order:</Label>
            <Select onValueChange={(value) => setOrder(value as SortDirection)}>
               <SelectTrigger className="w-[150px] max-w-[200px]" value={order}>
                  {order == "asc" ? "Ascending" : "Descending"}
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="desc">Descending</SelectItem>
                  <SelectItem value="asc">Ascending</SelectItem>
               </SelectContent>
            </Select>
         </div>
      </>
   )
}
export default TableActions
