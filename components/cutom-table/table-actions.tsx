"use client"

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
} from "@/components/ui/select"
import { useTableStore } from "@/hooks/use-table"
import { SortDirection } from "@/types"

function TableActions() {
   const { order, setOrder, pageSize, setPageSize } = useTableStore()

   return (
      <>
         <Select onValueChange={(value) => setOrder(value as SortDirection)}>
            <SelectTrigger className="w-full max-w-[200px]" value={order}>
               Order: {order}
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="desc">Descending</SelectItem>
               <SelectItem value="asc">Ascending</SelectItem>
            </SelectContent>
         </Select>
         <Select onValueChange={(value) => setPageSize(parseInt(value))}>
            <SelectTrigger className="w-full max-w-[200px]" value={pageSize}>
               Page size: {pageSize}
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="10">10</SelectItem>
               <SelectItem value="20">20</SelectItem>
               <SelectItem value="30">30</SelectItem>
               <SelectItem value="40">40</SelectItem>
               <SelectItem value="50">50</SelectItem>
            </SelectContent>
         </Select>
      </>
   )
}
export default TableActions
