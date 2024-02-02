import { cn } from "@/lib/utils";



  export function TypeH3({children, className} : {children: React.ReactNode, className?: string}) {
    return (


        
        <h3 className={cn(className,"scroll-m-20 text-2xl font-semibold tracking-tight")}>{children}</h3>
    )
  }