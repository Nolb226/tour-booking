import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export function formatCurrency(currency: number) {
   const { format } = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
   })
   return format(currency)
}

export function formatDayPast(input: string): string {
   const dayPast = -Math.abs(new Date().getDate() - new Date(input).getDate())
   let result
   if (dayPast < -1) {
      result = new Intl.RelativeTimeFormat('vi-VN', {
         style: 'short',
         //    timeZone: "Asia/Ho_Chi_Minh",
      }).format(dayPast, 'days')
   } else {
      result = new Intl.RelativeTimeFormat('vi-VN', {
         numeric: 'auto',
         //    timeZone: "Asia/Ho_Chi_Minh",
      }).format(dayPast, 'days')
   }
   console.log(result, dayPast)
   return result
}
