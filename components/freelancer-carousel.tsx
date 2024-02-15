"use client";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import { Globe, Hand, Minus, MinusIcon, XIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {  SmallJobSelect } from "./small-job-select";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ContactFreelancerForm } from "./contact-freelancer-form";
export type Freelancer = {
  name: string;
  id: string;
  intro: string;
  src: string;
  degree: string;
  school: string;
  services: SmallJobs[];
  rate: number;
  images?: string[];
  email:string;
  phone:string;
};

export type SmallJobs =
  | "clean floor"
  | "replace toilet"
  | "fix trim"
  | "dump runs"
  | "demo wall"
  | "pack boxes"
  | "paint bedroom"
  | "fix outlet"
  | "hang tv";

export default function FreelanceCarousel({
  freelancers,
  filters,
}: {
  filters: SmallJobs[];
  freelancers: Freelancer[];
}) {
  const [mustHave1, setMustHave1] = useState<SmallJobs[]>([]);
const [contactFreelancerDialog, setContactFreelancerDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFreelancer, setSelectedFreelancer] = useState<Freelancer | null>(
    null
  );
  const freelancersWhoHaveAllMustHave1s = freelancers.filter((freelancer) =>
    mustHave1.every((mustHave) => freelancer.services.includes(mustHave))
  );
  return (
    <>

<Dialog
        open={contactFreelancerDialog && selectedFreelancer ? true : false}
        onOpenChange={setContactFreelancerDialog}
      >
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Contact Form</DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            {selectedFreelancer&&
          <ContactFreelancerForm onSuccess={()=>{
            setContactFreelancerDialog(false)
          
          }}  name={selectedFreelancer.name} email={selectedFreelancer.email} phone={selectedFreelancer.phone}/>}
            {/* <Button
              onClick={() => setContactFreelancerDialog(false)}
              type="submit"
              className="w-full mt-4"
            >
              Continue
            </Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialog && selectedFreelancer ? true : false}
        onOpenChange={setOpenDialog}
      >
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Freelancer</DialogTitle>
            <DialogDescription>
            {selectedFreelancer?.intro}
       
            <Carousel className="w-full max-w-4xl">
        <CarouselContent>

          
          {selectedFreelancer?.images?.map((image, index) => (
            <CarouselItem key={index} className="  basis-1/2">
         
                <Card>
                  <CardHeader className='p-0'>
                    <AspectRatio ratio={9 / 9}>
                      <Image
                        alt={image}
                        src={`/${image}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </AspectRatio>

               

                  </CardHeader>

                </Card>
           
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              onClick={() => setOpenDialog(false)}
              type="submit"
              className="w-full mt-4"
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-wrap justify-center items-center mb-2">
        <SmallJobSelect values={mustHave1} options={filters} onSelect={setMustHave1} />

      </div>

      <div className="flex flex-wrap justify-center items-center mb-8  min-h-9 h-9">
    {mustHave1.map((framework) => (
      <div  key={framework} className='flex items-center justify-center '>
              <Badge variant="secondary" className="mr-2 mb-2">
        {framework}

        <Button  variant='ghost' onClick={() => setMustHave1(mustHave1.filter((item) => item !== framework))}>
          <MinusIcon />
      </Button>
      </Badge>

        </div>

    ))}
    </div>
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {freelancersWhoHaveAllMustHave1s.map((freelancer, index) => (
            <CarouselItem key={index} className="basis-1/2">
              <div className="p-1">
                <Card>
                  <CardHeader>
 
<div className='flex w-full justify-between items-center'>
<Avatar>
      <AvatarImage src="/rams.png" alt="@shadcn" />
      <AvatarFallback>NI</AvatarFallback>
    </Avatar>

    <div className="flex flex-col">

    <div className="text-lg font-semibold text-right">
                        {freelancer.name}
                      </div>
    <p className="text-right text-sm text-muted-foreground">
                      {freelancer.degree} - {freelancer.school}
                    </p>

    </div>

  </div>


           



       
<div className='flex w-full'>
<Button className='basis-1/2'  variant='outline' onClick={() => {
                      setOpenDialog(true);
                      setSelectedFreelancer(freelancer);
                    }
                    }>
                      View Profile
                    </Button>


                    <Button className='basis-1/2' variant='secondary' onClick={() => {
                      setContactFreelancerDialog(true);
                      setSelectedFreelancer(freelancer);
                    }
                    }>
                      Contact
                    </Button>
</div>


     

                    <Separator className="my-2" />
                    <div className="flex flex-wrap w-full ">
                      <Hand className="mr-2" />
                      {freelancer.services.map((city) => (
                        <Badge
                          
                          className={`mr-2 mb-2 opacity-80 hover:cursor-pointer hover:opacity-100 transition-all ${mustHave1.includes(city) ? "opacity-100" : "opacity-80"}`}
                          variant={"outline"}
                          key={city}
                          onClick={() =>{
                             //add to must have if not in list
                            if (!mustHave1.includes(city)) {
                              setMustHave1([...mustHave1, city]);
                            } else{
                              setMustHave1(mustHave1.filter((item) => item !== city));
                            }
                          } }
                        >
                          {city}
                        </Badge>
                      ))}
                    </div>

                    <Separator className="my-2" />
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center  w-full p-6"></CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
