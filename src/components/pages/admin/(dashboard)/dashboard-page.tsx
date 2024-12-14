'use client'
import { Bar, BarChart, XAxis } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Bill } from '@/model/bill'
import { useMemo, useState } from 'react'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { newDate } from 'react-datepicker/dist/date_utils'
import { formatCurrency } from '@/lib/utils'
import { DayPicker } from '@/components/day-picker'

interface DashboardPageProps {
   bills: Bill[]
}
const chartConfig = {
   month: {
      label: 'month',
      color: '#2563eb',
   },
   total: {
      label: 'total',
      color: '#60a5fa',
   },
} satisfies ChartConfig

export default function DashboardPage({ bills }: DashboardPageProps) {
   console.table(bills)

   const [yearChart, setYearChart] = useState(new Date().getFullYear() + '')
   const [yearTopTours, setYearTopTour] = useState(
      new Date().getFullYear() + ''
   )
   const monthlyTotals = useMemo(() => {
      return Array.from({ length: 12 }, (_, i) => ({
         month: i + 1,
         total: bills
            .filter((bill) => {
               const bookedDay = new Date(bill.booked_at)
               return (
                  bookedDay.getMonth() === i &&
                  bill.status === 'PAID' &&
                  bookedDay.getFullYear() === Number(yearChart)
               )
            })
            .reduce((acc, bill) => acc + bill.total_price, 0),
      }))
   }, [bills, yearChart])

   const topTours = useMemo(() => {
      const tourMap = new Map<string, { total: number; avt: string }>()

      bills.forEach((bill) => {
         if (
            bill.status === 'PAID' &&
            new Date(bill.booked_at).getFullYear() === Number(yearTopTours)
         ) {
            const current = tourMap.get(bill.tour_title) || {
               total: 0,
               avt: bill.avt,
            }
            tourMap.set(bill.tour_title, {
               total: current.total + bill.tour_price,
               avt: current.avt,
            })
         }
      })

      return Array.from(tourMap.entries())
         .map(([title, { total, avt }]) => ({ title, total, avt }))
         .sort((a, b) => b.total - a.total)
         .slice(0, 5)
   }, [bills, yearTopTours])

   return (
      <div className="pl-6 pr-8 pt-4">
         <div className="flex gap-8">
            <div className="w-3/4">
               <div className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-2">
                     <h2 className="text-xl font-semibold text-gray-900">
                        Revenues
                     </h2>
                     <span>in</span>
                     <span>Year:</span>
                     <Select
                        defaultValue={yearChart}
                        onValueChange={setYearChart}
                     >
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="2020">2020</SelectItem>
                           <SelectItem value="2021">2021</SelectItem>
                           <SelectItem value="2022">2022</SelectItem>
                           <SelectItem value="2023">2023</SelectItem>
                           <SelectItem value="2024">2024</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <ChartContainer
                     config={chartConfig}
                     className="max-h-[400px] min-h-[200px] w-full"
                  >
                     <BarChart accessibilityLayer data={monthlyTotals}>
                        <XAxis
                           dataKey="month"
                           tickLine={false}
                           tickMargin={10}
                           axisLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="total" fill="#60a5fa" radius={4} />
                     </BarChart>
                  </ChartContainer>
               </div>
            </div>
            <div className="w-1/4">
               <div className="mb-4 flex w-fit flex-col gap-4 rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-2">
                     <div className="text-lg font-semibold">Top Tours</div>
                     <Select
                        defaultValue={yearTopTours}
                        onValueChange={setYearTopTour}
                     >
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="2020">2020</SelectItem>
                           <SelectItem value="2021">2021</SelectItem>
                           <SelectItem value="2022">2022</SelectItem>
                           <SelectItem value="2023">2023</SelectItem>
                           <SelectItem value="2024">2024</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="">
                     {topTours.map(({ title, total, avt }) => (
                        <div
                           key={title}
                           className="mb-4 flex w-fit gap-2 rounded-lg p-4"
                        >
                           <img
                              src={avt}
                              className="size-24 rounded-md border border-gray-200"
                              alt=""
                           />
                           <div className="flex flex-col justify-between">
                              <div className="text-sm font-semibold">
                                 {title}
                              </div>
                              <div className="text-lg font-semibold text-light-color-scheme-primary-500">
                                 {formatCurrency(total)}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
