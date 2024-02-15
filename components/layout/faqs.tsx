
import { TypeH2 } from "../typography/h2";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


type FaqProps={
    faqs: Faq[]

}

type Faq = {
    question: string
    answer: string
}
export default function Faqs({faqs}:FaqProps) {

return ( 

    <section className='w-full p-4  '>
        <TypeH2>FSBO FAQs</TypeH2>
    <Accordion type="single" collapsible className="w-full">
  {
 faqs.map((faq)=> { 
        return (
            <AccordionItem value={faq.question} key={faq.question} className="w-full">
            <AccordionTrigger className="w-full">
           {faq.question}
            </AccordionTrigger>
            <AccordionContent className="w-full">
            {faq.answer}
            </AccordionContent>
        </AccordionItem>
        )

  }
     
      )
      }
  </Accordion>
    </section>

)

}