'use client'
import { Lead } from "@/components/typography/lead"
import { Muted } from "@/components/typography/muted"
import { Small } from "@/components/typography/small"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { todo } from "node:test"
import { useState } from "react"


type TopTabItems ={
    key: string
    label: string
    icon: React.ReactNode
    description?: string
    component: React.ReactNode,
    todo?: boolean
   
}

type DeepDashboardProps = {
    topTabs: TopTabItems[]
} 

export default function DeepDashboard({topTabs}:DeepDashboardProps) {

const [activeTab, setActiveTab] = useState<TopTabItems | null>(topTabs[1])

return (
    <section id="section2" className='flex flex-col w-full p-4   h-[1500px]  '>

        <div className='flex w-full overflow-x-scroll '>
            {/* {topTabs.map((tab)=> {
               
                return (
                    <div
  
                    onClick={
                        tab.todo?()=>alert('This feature is not yet available'):
                        ()=>setActiveTab(tab)
                    }
                    key={tab.key} className={`relative flex flex-col items-center justify-center mr-5 opacity-80 hover:opacity-100 transition-all hover:cursor-pointer ${tab.key==activeTab?.key?'opacity-100':''}  `}>
    
                    <Card  className={` h-20 w-20 border-b mb-4 border-gray-600 rounded-xl flex items-center flex-col justify-center p-4    ${tab.key==activeTab?.key?'    text-blue-900':''}  ${tab.todo?'opacity-20':''}`}>
                     <AspectRatio ratio={1} className='m-0 p-0 flex flex-col items-center justify-center'>
                     {tab.icon}
                     </AspectRatio>
                 
                     
                    </Card>
                    
                    {tab.todo&&<div className='absolute text-xs  bottom-1/2    -rotate-45'><Badge variant={'outline'}>Soon</Badge></div>}
                    <Small   
                    className={`text-center  ${tab.key==activeTab?.key?'opacity-100':'opacity-80' }  ${tab.todo?'opacity-40':''}`}
                    >{tab.label}</Small>
                    </div>
                )
            }
           
               )}      */}
        </div>

        <Separator className='w-full mb-20'/>

        {activeTab?.description&& <Lead>{activeTab?.description}</Lead>}
        <div className='flex flex-col w-full   rounded-xl p-4 items-center  flex-grow '>
            {activeTab&&activeTab.component}
        </div>
    </section>
)



}
