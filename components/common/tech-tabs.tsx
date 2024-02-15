'use client'

import { useState } from "react"
import { Card } from "../ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Small } from "../typography/small"
import { Muted } from "../typography/muted"
import Link from "next/link"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Badge } from "../ui/badge"

type TechTabProps = {
    items: TabItems[]
}

type TabItems = {
    key: string
    label: string
    icon: React.ReactNode
    component: React.ReactNode
    description?: string
    href?: string
}

export default function TechTabs({items}:TechTabProps) {


    const [activeTab, setActiveTab] = useState<TabItems | null>(items[0])

return <div className='flex flex-col w-full mt-8 border  border-gray-800   rounded-xl  h-full '>
        <div className='flex w-full overflow-x-scroll border-b  px-2 '>
            {items.map((tab)=> {
               
                return (
                    <div
                    onClick={()=>setActiveTab(tab)}
                    key={tab.key} className={`flex  flex-col  h-20 items-center justify-center mr-5  opacity-80 hover:opacity-100 transition-all hover:cursor-pointer ${tab.key==activeTab?.key?'opacity-100':''} `}>
    
                    <div  className={`   p-2  border-gray-600 rounded-xl flex   items-center   ${tab.key==activeTab?.key?'    bg-blue-800':''} `}>
               
                     {tab.icon}
                
                 
                     <Small   
                    className={`text-center  ml-3  ${tab.key==activeTab?.key?'opacity-100':'opacity-80'} `}
                    >{tab.label}</Small>
                    </div>
                    
                 
                    </div>
                )
            }
           
               )}     
        </div>

        <div className='flex w-full justify-between items-center p-4 border-b border-gray-800'>
        <Muted>{activeTab?.description}</Muted>
        {activeTab?.href&&
        <Link  href={activeTab?.href} className='text-blue-800 hover:text-blue-900'><Badge variant='secondary'>See All<ArrowTopRightIcon className='inline-block ml-3'/></Badge></Link>}</div>
        <div className='flex flex-col w-full  mt-14  rounded-xl p-4 items-center h-full'>
            {activeTab&&activeTab.component}
        </div>
        
</div>

}