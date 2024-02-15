'use client'
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"
import Link from "next/link"
import { TypeH1 } from "../typography/h1"
import { TypeP } from "../typography/p"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Badge } from "../ui/badge"


type IconButtonProps = {
    icon: React.ReactNode
    label?: string
    href: string
}

export default function HeroSection({
  icons,
    linkLabel,
    linkHref,
    leadingIcon,
    secondaryIcon,
    secondaryLabel,
    secondaryHref,
    h1,
    p1,
    p2,
    primaryButton,
    secondaryButton,
    imageUrl,
    videoUrl,
    thumbnailUrl,
    videoAltText
} : 

{

    icons: IconButtonProps[],
    linkLabel?: string,
    linkHref?: string,
    leadingIcon?: React.ReactNode,   
    secondaryIcon?: React.ReactNode,
    secondaryLabel?: string,
    secondaryHref?: string,
    h1: string,
    p1: string,
    p2: string,
    primaryButton: React.ReactNode,
    secondaryButton: React.ReactNode,
    imageUrl?: string
    videoUrl?:string
    thumbnailUrl?:string
    videoAltText?:string

}
) {    



    return(

        <section className='flex flex-col px-4 md:grid md:grid-cols-2 md:gap-20 mb-72 '>


        <div className='flex flex-col p-10 md:p-0  items-center md:items-start justify-center  md:h-[600px] order-2 md:order-1    '>
       

       <div className='flex'>
        {
        icons?.map((icon)=> {
            return (
                <Link key={icon.href} target="_blank" className='mb-8 text-sm text-muted-foreground flex  items-center  mr-2'  href={icon.href}>
            
                <Badge className='p-2' variant={'outline'}>
                  <>
                 
                <span>
                 {icon.icon}
                  </span> 
                   <span className='mr-2'>
                  {icon.label}
                      </span>  
                      <span>
                      <ArrowTopRightIcon className='inline-block'/> 
                      </span>  
                      </>  
                      </Badge>
                  
  
                   </Link>
            )



        }
          
          )}
 
  
       </div>

             

             
          <TypeH1>
            {h1}
          </TypeH1>
 
        
            <TypeP>

     
              {p1}
              </TypeP>

        <div className='flex-col md:flex-row flex  mt-8 justify-center md:justify-start w-full '>
     
        {primaryButton}
     <div className='h-2 w-0 md:w-2 md:h-0 '/>

  {secondaryButton}

  
        </div>
          
          </div>
        
        <div className='order-1 md:order-2 flex flex-col align-middle justify-center'>
        <AspectRatio   ratio={16/9} >
       {imageUrl&& <Image src={imageUrl} alt={h1} layout='fill' objectFit='cover' className='rounded-lg'/>}
        {videoUrl && <video src={videoUrl}  poster={thumbnailUrl} controls={true} loop muted className='rounded-lg w-full h-full'/>}
            </AspectRatio>
            {videoAltText&&<p className='text-muted-foreground text-sm mt-2 p-2'>{videoAltText}</p>}
        </div>
        
        
              </section>

    )




}