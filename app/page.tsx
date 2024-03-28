"use client"

import { useTableStore } from "@/hooks/use-table"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { fetchTags } from "@/actions/fetch-tags"
import CustomTable from "@/components/cutom-table/custom-table"

function Home() {
   const { order, sort, page, pageSize, setHasMore } = useTableStore()
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
      } else if (!data || !data?.items || data?.items.length < 1) {
         setStatus("noItems")
      } else if (data?.items.length > 0) {
         setStatus("ok")
      }
   }, [data, isPending, error])

   console.log(data)

   useEffect(() => {
      setHasMore(data?.has_more || false)
   }, [page, pageSize, data])

   return (
      <main>
         <h1 className="px-5 pt-12 text-center text-3xl font-semibold">
            Tag list from stackoverflow API
         </h1>
         <CustomTable status={status} data={data?.items} />
      </main>
   )
}
export default Home
