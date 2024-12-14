import SearchLocation from '@/components/pages/(client)/tour/search-location'
import { getLocationTours } from '@/service/location'

async function Page({
   searchParams,
}: {
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const location = await getLocationTours(searchParams.location as string)

   return <SearchLocation location={location} />
}

export default Page
