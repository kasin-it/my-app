"use client"

import { useTableStore } from "@/hooks/use-table"
import { Button } from "./ui/button"

function TablePagination() {
   const { page, hasMore, setPage } = useTableStore()

   return (
      <div className="flex justify-center">
         <div className="flex w-full max-w-[500px] items-center gap-5">
            <Button
               className="w-full"
               disabled={page <= 1}
               onClick={() => setPage(page - 1)}
            >
               Previous
            </Button>
            <p className="flex items-center gap-1">
               Page <span>{page}</span>
            </p>
            <Button
               className="w-full"
               disabled={!hasMore}
               onClick={() => setPage(page + 1)}
            >
               Next
            </Button>
         </div>
      </div>
   )
}
export default TablePagination
