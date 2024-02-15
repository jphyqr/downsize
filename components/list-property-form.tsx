"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"
import { ToastAction } from "./ui/toast"

const formSchema = z.object({
  phone: z.string().min(10, "Phone number is too short"),
  name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    to: z.string().min(2, "To is too short"),
    subject: z.string().min(2, "Subject is too short"),
    address: z.string().min(2, "Address is too short"),
    message: z.string().min(0)
})

export function ListPropertyForm({name, email, phone, onSuccess} : {name: string, email: string, phone: string, onSuccess: ()=>void}) {
  // 1. Define your form.
  const {toast} = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      to: email,
      subject: `Listing Request`
      
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('do something')
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const obj = {
        ...values,
        html : `<h1>${values.name}</h1><p>${values.message}</p> <p>${values.phone}</p> <p>${values.email}</p> <p>${values.address}</p>`
    }
    try{
    const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    )
    }
    catch(err){
      console.log({err
      })
    }
    finally{
        toast({
            title: "E-mail sent ",
            description: "Email sent to App. We will get back to you soon.",
            action: (
              <ToastAction altText="Goto schedule to undo">Okay</ToastAction>
            ),
          })
         form.reset()
         onSuccess()
      console.log('done')
  
  }
    console.log(values)
  }

  return (
    <>

    <Form  {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="phone"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type='tel' placeholder="306..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="to"
        
          render={({ field }) => (
            <FormItem     className='hidden'>
              <FormLabel>To</FormLabel>
              <FormControl>
                <Input hidden placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="subject"
        
          render={({ field }) => (
            <FormItem     className='hidden'>
              <FormLabel>To</FormLabel>
              <FormControl>
                <Input hidden placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField 
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Your Address" type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Other info" type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>    </>
  )



}
