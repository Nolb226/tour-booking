export const ENDPOINTS = {
   AUTH: {
      LOGIN: '/auth/login',
      SIGNUP: '/auth/signup',
      CURRENT_USER: '/users/my-info',
   },
   TOUR: {
      GET_TOUR_DETAILS: (slug: string) => `/tours/slug/${slug}`,
      GET_TOUR_LIST: '/tour',
      GET_OUTSTANDING_TOURS: '/tours/outstanding',
      BOOKMARKED: '/bookmarks',
      BOOKMARK_TOUR: (tourId: string) => `/bookmarks/${tourId}`,
      GET_TOUR_BY_LOCATION: (locationId: string) =>
         `/tours/location/${locationId}`,
      SEARCH: '/tours/search',
      GET_ADMIN_TOURS: '/tours/summaries',
   },
   BOOKING: {
      GET_USER_BOOKED_TOUR: '/users/my-booking',
      CREATE_DRAFT: '/booking/chosen-tour',
      UPDATE_BILL: '/booking/payment',
      POST_PAYMENT: '/booking/payment/vn-pay',
      BILL_DETAILS: (billId: string) => `/booking/payment/detail/${billId}`,
      DRAFT_DETAIL: (billId: string) => `/booking/payment/${billId}`,
   },
   LOCATION: {
      GET_TOURS: (search: string) => `/tours/location/${search}`,
      GET_LOCATIONS: '/locations',
      GET_PLACES: '/places',
   },
   USER: {
      LIST: '/users/admin',
   },
   BILL: {
      LIST: '/booking/get-all',
   },
}
