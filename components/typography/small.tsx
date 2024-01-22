import { cn } from "@/lib/utils";



  export function Small({children, className} : {children: React.ReactNode, className?: string}) {
    return (


        
        <small className={cn(className,"text-sm font-medium leading-none")}>{children}</small>
    )
  }