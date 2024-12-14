export type PaginateData<T> = {
   message: string
   result: {
      content: T[]
      pageable: {
         pageNumber: number
         pageSize: number
      }
      last: boolean
      totalPages: number
      totalElements: number
      size: number
      number: number
      sort: {
         sorted: boolean
         unsorted: boolean
         empty: boolean
      }
      first: boolean
      numberOfElements: number
      empty: boolean
   }
}
