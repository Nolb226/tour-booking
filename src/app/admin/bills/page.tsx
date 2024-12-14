import { DataTable } from '@/components/data-table'
import { billColumns } from '@/components/pages/admin/bill/column'
import { getAllBill } from '@/service/bill'

export default async function Page() {
   const { result } = await getAllBill()

   return (
      <div>
         <DataTable columns={billColumns} data={result} />
      </div>
   )
}
