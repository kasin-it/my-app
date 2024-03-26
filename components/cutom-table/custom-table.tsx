"use client"

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import TableActions from "@/components/cutom-table/table-actions"
import TablePagination from "@/components/cutom-table/table-pagination"
import { useTableStore } from "@/hooks/use-table"
import { Tag } from "@/types"

interface CustomTableProps {
   data: Tag[] | undefined
   status: "error" | "noItems" | "loading" | "ok"
}

function CustomTable({ data, status }: CustomTableProps) {
   const { sort, pageSize, setSort } = useTableStore()

   function generateSkeletons() {
      return Array.from({ length: pageSize }, (_, skeletonIndex) => (
         <TableRow key={skeletonIndex}>
            <TableCell>
               <Skeleton className="h-[40px] w-full" />
            </TableCell>
            <TableCell>
               <Skeleton className="h-[40px] w-full" />
            </TableCell>
         </TableRow>
      ))
   }

   function renderTableData() {
      return (
         <>
            {data?.map((dataItem: Tag) => (
               <TableRow key={dataItem.name}>
                  <TableCell>{dataItem.name}</TableCell>
                  <TableCell>{dataItem.count}</TableCell>
               </TableRow>
            ))}
         </>
      )
   }

   return (
      <div className="flex flex-col gap-5 p-5 pt-10 sm:p-12">
         <div className="flex justify-center gap-4">
            <TableActions />
         </div>
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>
                     <Button
                        variant="ghost"
                        disabled={sort == "name"}
                        onClick={() => {
                           setSort("name")
                        }}
                     >
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                     </Button>
                  </TableHead>
                  <TableHead>
                     <Button
                        variant="ghost"
                        disabled={sort == "popular"}
                        onClick={() => {
                           setSort("popular")
                        }}
                     >
                        Count
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                     </Button>
                  </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {status == "ok" && renderTableData()}

               {status == "loading" && generateSkeletons()}
            </TableBody>
         </Table>
         {status == "error" && (
            <div className="flex h-[200px] w-full items-center justify-center">
               <p className=" text-xl font-bold">
                  Something went wrong, try again.
               </p>
            </div>
         )}
         {status == "noItems" && (
            <div className="flex h-[200px] w-full items-center justify-center">
               <p className=" text-xl font-bold">No items found.</p>
            </div>
         )}
         <TablePagination isLoading={status == "loading"} />
      </div>
   )
}
export default CustomTable
