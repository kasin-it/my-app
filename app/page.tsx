"use client"

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"

import { useTableStore } from "@/hooks/use-table"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchTags } from "@/actions/fetch-tags"
import TableActions from "@/components/table-actions"
import TablePagination from "@/components/table-pagination"

function Home() {
   const { order, sort, page, pageSize, setSort, setHasMore } = useTableStore()
   const [status, setStatus] = useState<"error" | "noItems" | "loading" | "ok">(
      "loading"
   )

   const { isPending, error, data } = useQuery({
      queryKey: ["tagData", page, pageSize, order, sort],
      queryFn: () => fetchTags({ order, sort, page, pageSize }),
   })

   useEffect(() => {
      if (isPending) {
         setStatus("loading")
      } else if (error) {
         console.log(error)
         setStatus("error")
      } else if (data?.length < 1) {
         setStatus("noItems")
      } else if (data?.length > 0) {
         setStatus("ok")
      }
   }, [data, isPending, error])

   useEffect(() => {
      setHasMore(data?.hasMore)
   }, [page, pageSize, data])

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
            {data?.items.map((dataItem: { name: string; count: number }) => (
               <TableRow key={dataItem.name}>
                  <TableCell>{dataItem.name}</TableCell>
                  <TableCell>{dataItem.count}</TableCell>
               </TableRow>
            ))}
         </>
      )
   }

   return (
      <div className="flex flex-col gap-5 p-12">
         <div className="flex gap-4">
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
         <TablePagination />
      </div>
   )
}
export default Home
