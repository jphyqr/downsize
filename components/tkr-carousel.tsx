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
import { BathIcon, Bed, BedIcon, DollarSign, EyeIcon, Globe, HotelIcon, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
import { Lead } from "./typography/lead";
import { TypeP } from "./typography/p";
import { Button } from "./ui/button";
import { set } from "react-hook-form";
import { ContactPropertyForm } from "./contact-property-form";

export type TKRs = {
  name: string;
  id: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  price: number;
  honestDoorPrice: number;
  closestSchool: string;
  yearBuilt: number;
  condition: string;
  propertyType: string;
  src: string;
  good: string[];
  bad: string[];
  ugly: string[];
  pricing: string;
  priceAdjustments?: PriceAdjustment[];
  sellerCommision: number;
  email:string;
  phone:string;
  suites: Suites[];
  lotSize: number;
  furnace : Upgrade;
  roof: Upgrade;
  braced: boolean;
  garage: Garage;
  waterHeater: Upgrade;
};

export type Garage  = 'detached single' | 'attached single' | 'detached double' | 'attached double' | 'none'
export type Upgrade = {
  year: number;
  type: string;
  rented?: boolean;
}

export type PriceAdjustment = {
  amount: number;
  reason: string;
};
export type SuiteType = 'basement' | 'main floor' | 'upper' | 'other' | 'apartment' | 'house'
export type LaundryType = 'shared basement' | 'in suite' | 'shared main floor' | 'shared upper' | 'shared other' | 'shared apartment' | 'shared house
export type Suites = {
  name: string;
  rent: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  src: string;
  currentlyRented: boolean;
  lastRentIncrease: number;
  suiteType: SuiteType;
 laundryType: LaundryType;
 separateEntrance: boolean;
 leaseStarted: string;
 leaseEnds: string;

}

export default function TKRCarousel({
  properties,
}: {
  properties: TKRs[];
}) {
  const [mustHave1, setMustHave1] = useState<string | null>(null);
  const [mustHave2, setMustHave2] = useState<string | null>(null);
  const [mustHave3, setMustHave3] = useState<string | null>(null);
  const [mustHave4, setMustHave4] = useState<string | null>(null);
  const [contactPropertyOwnerDialog, setContactPropertyOwnerDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<TKRs | null>(
    null
  );
  return (
    <>

<Dialog
        open={contactPropertyOwnerDialog && selectedProperty ? true : false}
        onOpenChange={setContactPropertyOwnerDialog}
      >
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Contact Form</DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            {selectedProperty&&
          <ContactPropertyForm onSuccess={()=>{
            setContactPropertyOwnerDialog(false)
          
          }}  name={selectedProperty.name} email={selectedProperty.email} phone={selectedProperty.phone}/>}
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
        open={openDialog && selectedProperty ? true : false}
        onOpenChange={setOpenDialog}
      >
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Pricing Breakdown</DialogTitle>
            <DialogDescription>
              <Table>
                <TableCaption>
                  Estimated costs to bring to market value
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Item</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedProperty?.priceAdjustments?.map((invoice, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{"Item"}</TableCell>
                      <TableCell>{invoice.reason}</TableCell>
                      <TableCell className="text-right">
                        {Math.abs(invoice.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">
                      {Math.abs(
                        Number(
                          selectedProperty?.priceAdjustments?.reduce(
                            (acc, adjustment) => acc + adjustment.amount,
                            0
                          )
                        )
                      )}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
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

      <Carousel className="w-3/4 max-w-4xl">
        <CarouselContent>
          {properties.map((freelancer, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        alt={freelancer.name}
                        src={`/${freelancer.src}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </AspectRatio>

 

                    <div className="flex w-full justify-between items-center p-2">

                    <HotelIcon/>  {freelancer.suites.map((suite, index) => (
                        
                        <Badge key={index} variant="outline">
                        {suite.suiteType}  {suite.bedrooms} + {suite.bathrooms} 
                        </Badge>
                      ))}
                 
                     
                    
                    </div>

                    <div className="flex w-full justify-between items-center p-2">
                    <Label>{freelancer.yearBuilt}</Label>

                    <Label>{freelancer.lotSize} sqft</Label>
                    <Label>{freelancer.area}</Label>

                    <Label>
                      {(freelancer.suites.reduce((acc, suite) => acc + suite.rent, 0)/ Number(freelancer.suites.reduce((acc, suite) => acc + suite.sqft, 0))).toFixed(2)} $/sft
                    </Label>

                    <Label>
                    {
  (freelancer.suites.reduce((acc, suite) => acc + suite.rent, 0)*100 / freelancer.price).toFixed(2) 
} %cap
                    </Label>
                    </div>
                  
                    <div className='flex w-full p-4'>



        
</div>


                    <Tabs defaultValue="Good" className="w-full h-[400px]">
                      <TabsList className='w-full'>
                        <TabsTrigger className=" basis-1/2" value="About">About</TabsTrigger>
                        <TabsTrigger className=" basis-1/2" value="Tennants">Tennants</TabsTrigger>

                        <TabsTrigger className=" basis-1/2" value="Pricing">Pricing</TabsTrigger>

                      </TabsList>

                      <TabsContent value="About">
                        <ul>
                          {freelancer.good.map((good) => (
                            <li key={good}>{good}</li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="Tennants">
                      <Table className='text-xs'>
        
        <TableHeader>
          <TableRow>
            <TableHead  colSpan={1} >Suite</TableHead>
            
            <TableHead  colSpan={1} >
              Since
            </TableHead>
            <TableHead  colSpan={1} >
              Increase
            </TableHead>
            <TableHead  colSpan={1} className="text-right">
              Ends
            </TableHead>
            <TableHead  colSpan={1} className="text-right">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            freelancer.suites.map((suite, index) => (
              <TableRow key={index}>
                <TableCell colSpan={1} >{suite.name}</TableCell>
                <TableCell colSpan={1} >{suite.leaseStarted}</TableCell>
                <TableCell colSpan={1} >{suite.lastRentIncrease}</TableCell>
                <TableCell colSpan={1} className="text-right">
                  {suite.leaseEnds}
                </TableCell>
                <TableCell colSpan={1} className="text-right">
                  {suite.rent}
                </TableCell>
              </TableRow>
            ))
          }
     

  
        </TableBody>

        <TableFooter>


        </TableFooter>
      </Table>
                      </TabsContent>
                      <TabsContent value="Good">
                        <ul>
                          {freelancer.good.map((good) => (
                            <li key={good}>{good}</li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="Bad">
                        {" "}
                        <ul>
                          {freelancer.bad.map((good) => (
                            <li key={good}>{good}</li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="Ugly">
                        {" "}
                        <ul>
                          {freelancer.ugly.map((good) => (
                            <li key={good}>{good}</li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="Pricing">
                        <Table className='text-xs'>
        
                          <TableHeader>
                            <TableRow>
                              <TableHead>Item</TableHead>
                              
                              <TableHead  colSpan={3} className="text-right">
                                Amount
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                {"Market Comp"}
                              </TableCell>
                             
                              <TableCell  colSpan={3} className="text-right">
                                {freelancer.honestDoorPrice}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="font-medium">
                                {"Defects"}
                              </TableCell>
  
                              <TableCell colSpan={3} className="text-right">
                                {freelancer.priceAdjustments?.reduce(
                                  (acc, adjustment) => acc + adjustment.amount,
                                  0
                                )}
                              </TableCell>
                            </TableRow>

                            <TableRow className=" ">
                              <TableCell colSpan={3}>As Is Value</TableCell>
                              <TableCell className="text-right">
                                $
                                {freelancer.honestDoorPrice +
                                  Number(
                                    freelancer.priceAdjustments?.reduce(
                                      (acc, adjustment) =>
                                        acc + adjustment.amount,
                                      0
                                    )
                                  )}
                              </TableCell>
                            </TableRow>
                          </TableBody>

                          <TableFooter>
                            <TableRow>
                              <TableCell>{`Price `} <span className='opacity-80 text-xs'>{freelancer.sellerCommision}% SC</span></TableCell>
                            
                              <TableCell colSpan={3} className="text-right">
                                ${freelancer.price}
                              </TableCell>
                            </TableRow>

                            <TableRow className="bg-green-950">
                              <TableCell colSpan={3}>Equity</TableCell>
                              <TableCell className="text-right">
                                $
                                {freelancer.honestDoorPrice +
                                  Number(
                                    freelancer.priceAdjustments?.reduce(
                                      (acc, adjustment) =>
                                        acc + adjustment.amount,
                                      0
                                    )
                                  ) -
                                  Number(freelancer.price)}
                              </TableCell>
                            </TableRow>
                          </TableFooter>
                        </Table>
                      </TabsContent>
                    </Tabs>

                  <div className='flex w-full'>
                    <Button className='basis-1/2'  variant='outline' onClick={() => {
                      setOpenDialog(true);
                      setSelectedProperty(freelancer);
                    }
                    }>
                      More Details
                    </Button>

                    <Button className='basis-1/2' variant='secondary' onClick={() => {
                      setContactPropertyOwnerDialog(true);
                      setSelectedProperty(freelancer);
                    }
                    }>
                      Request More Info
                    </Button>
                    </div>
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
