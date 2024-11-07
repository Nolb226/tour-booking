'use client'
import { login } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { useFormState, useFormStatus } from 'react-dom'

export default function Page() {
   const [state, action] = useFormState(login, undefined)
   return (
      <>
         <h2 className="mt-3 text-2xl font-bold text-light-color-scheme-gray-900">
            Đăng nhập
         </h2>
         <form action={action} className="mt-8 flex w-full flex-col gap-5">
            <Label htmlFor="email">
               <span className="text-sm font-medium text-light-color-scheme-gray-700">
                  Email
               </span>
               <Input
                  name="email"
                  id="email"
                  placeholder="ví dụ: your@email.com"
                  className="mt-1"
               />
               {state?.error.email && (
                  <div className="mt-1">
                     <p>Email must:</p>
                     <ul className="mt-2 flex flex-col gap-0.5 text-red-500">
                        {state.error.email?.map((error) => (
                           <li key={error}> - {error}</li>
                        ))}
                     </ul>
                  </div>
               )}
            </Label>
            <Label htmlFor="password">
               <span className="text-sm font-medium text-light-color-scheme-gray-700">
                  Mật khẩu
               </span>
               <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="********"
                  className="mt-1"
               />
               {state?.error.password && (
                  <div className="mt-1">
                     <p>Password must:</p>
                     <ul className="mt-2 flex flex-col gap-0.5 text-red-500">
                        {state.error.password?.map((error) => (
                           <li key={error}> - {error}</li>
                        ))}
                     </ul>
                  </div>
               )}
            </Label>
            <SubmitButton />
         </form>
         <div className="mt-5 flex h-5 items-center justify-center gap-1 text-sm text-gray-600">
            <span>Bạn chưa có tài khoản?</span>
            <Link
               className="cursor-pointer text-sm font-semibold text-light-color-scheme-primary-700 no-underline"
               href={'/sign-up'}
            >
               Đăng ký
            </Link>
         </div>
      </>
   )
}

function SubmitButton() {
   const { pending } = useFormStatus()
   return (
      <Button disabled={pending} className="items-center gap-2 px-2.5 py-4">
         Đăng nhập{' '}
         <LoaderCircle
            className={cn('size-5 animate-spin', {
               hidden: !pending,
            })}
         />
      </Button>
   )
}
