import { ColumnName, SortDirection } from "@/types"
import { create } from "zustand"

interface TableStore {
   order: SortDirection
   sort: ColumnName
   page: number
   pageSize: number
   hasMore: boolean
   setPageSize: (pageSizeValue: number) => void
   incrementPage: () => void
   decrementPage: () => void
   setHasMore: (hasMoreValue: boolean) => void
   setOrder: (OrderValue: SortDirection) => void
   setSort: (columnName: ColumnName) => void
}

export const useTableStore = create<TableStore>((set) => ({
   order: "asc",
   sort: "popular",
   page: 1,
   pageSize: 10,
   hasMore: true,
   setOrder: (orderValue: SortDirection) =>
      set({
         order: orderValue,
      }),
   setSort: (columnName: ColumnName) => set({ sort: columnName }),
   incrementPage: () => set((state) => ({ page: state.page + 1 })),
   decrementPage: () => set((state) => ({ page: state.page - 1 })),
   setPageSize: (pageSizeValue: number) =>
      set({
         pageSize: pageSizeValue,
      }),
   setHasMore: (hasMoreValue: boolean) => {
      set({
         hasMore: hasMoreValue,
      })
   },
}))
