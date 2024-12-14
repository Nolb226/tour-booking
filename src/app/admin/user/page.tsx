import { DataTable } from '@/components/data-table'
import { userColumns } from '@/components/pages/admin/user/user-columns'
import { getAllUser } from '@/service/user'

export default async function Page() {
   const users = await getAllUser()
   console.log(users.result.content)

   return (
      <div>
         <DataTable columns={userColumns} data={users.result.content} />
      </div>
   )
}
