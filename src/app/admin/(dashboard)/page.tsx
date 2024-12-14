import DashboardPage from '@/components/pages/admin/(dashboard)/dashboard-page'
import { getAllBill } from '@/service/bill'

export default async function Page() {
   const { result } = await getAllBill()

   return <DashboardPage bills={result} />
}
