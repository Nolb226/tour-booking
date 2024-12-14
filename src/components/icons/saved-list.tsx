import { cn } from '@/lib/utils'

interface SavedListProps extends React.HTMLAttributes<SVGElement> {}

export default function SavedListIcon({ className, ...props }: SavedListProps) {
   return (
      <svg
         width="28"
         height="28"
         className={cn('', className)}
         viewBox="0 0 28 28"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M21.0018 4.57706C21.0018 3.98199 20.5198 3.5 19.9248 3.5H8.07706C7.48199 3.5 7 3.98199 7 4.57706V6.73119H21.0018V4.57706Z"
            fill="#FEDF89"
         />
         <path
            d="M7 23.8135C7 24.3499 7.58808 24.6784 8.04475 24.3973L14.0009 20.7321L19.9571 24.3973C20.4138 24.6784 21.0018 24.3499 21.0018 23.8135V17.502H7V23.8135Z"
            fill="#F79009"
         />
         <path d="M21.0018 11.0391H7V17.5014H21.0018V11.0391Z" fill="#FDB022" />
         <path d="M21.0018 6.73145H7V11.0397H21.0018V6.73145Z" fill="#FEC84B" />
      </svg>
   )
}
