import TechTabs from "@/components/common/tech-tabs";
import { Calculator, Code, HelpingHand, Home, Hotel, Paintbrush, Spade, Wrench } from "lucide-react";
import JamStacks from "../../components/jamstack"
import { ScrollArea } from "@/components/ui/scroll-area";
import { CopyBlock } from "react-code-blocks";
import PropertyCarousel from "@/components/property-carousel";
import { Freehand } from "next/font/google";
import FreelanceCarousel from "@/components/freelancer-carousel";



export default function ReginaPreview() {
    const copyBlockProps = {
        text: {},
        language: 'jsx',
        showLineNumbers: false,
        startingLineNumber: false,
        wrapLines: true,
      };

return <TechTabs

items={[
{
    key:'Owner Occupied',
    label:'Owner Occupied',
    icon: <Home/>,
    description: 'Homes for sale by owner, no realtor fees',
    href: '/regina/home-flips',
    component:<PropertyCarousel properties={
        [
            {
                name: '123 Main St',
                id: '227-litzenberger-cres',
                email: 'jphyqr@gmail.com',
                phone: '306-555-5555',
                sqft: 2000,
                bedrooms: 3,
                bathrooms: 2,
                price: 365000,
                honestDoorPrice: 453800,
                closestSchool: 'WKC',
                yearBuilt: 1970,
                sellerCommision: 2,
                condition: 'Good',
                propertyType: 'Single Family',
                src: '227-litzenberger-cres.png',
                good: ['New Roof', 'Braced', '275K reno in 2017', '2 furnaces', '200 amp panel', 'New floor'],
                bad: ['Ceiling touch ups', 'Tile work' ],
                ugly: ['Unfinished basement'],
                pricing: 'HD says bed room.  Actually 3 + den on main level.  Basement has framing and egress windows installed for 2 more large bedrooms.  Roughin for toilet and sink but need to go underslab for basement shower.  '
            },
        
        ]
    } />},

    {
        key:'Tennant Occupied',
        label:'Tennant Occupied',
        icon: <Hotel/>,
        description: 'Homes for sale by owner, no realtor fees',
        href: 'regina/rentals',
        component:<PropertyCarousel properties={
            [
 
                {
                    name: '1235 wallace street',
                    id: '456',
                    sqft: 800,
                    email: 'jphyqr@gmail.com',
                    phone: '306-555-5555',
                    bedrooms: 3,
                    bathrooms: 2,
                    price: 160000,
                    honestDoorPrice: 163600,
                    closestSchool: 'St. Marys',
                    yearBuilt: 2005,
                    sellerCommision: 2,
                    condition: 'Good',
                    propertyType: 'Single Family',
                    src: '1235-wallace-street.png',
                    good: ['New Roof', 'Handy Tennant upstairs', 'Furnished Basement Suite', 'No Water Issues', 'Braced'],
                    bad: ['Garage Bad Shape'],
                    ugly: ['Yard total mess'],
                    pricing: 'HD not counting basement suite.  Has side enterance and furnished basement suite.  Outdated suite but rents easy.',

                    priceAdjustments:[
 
                        {
                            amount: 10000,
                            reason: 'Basement Suite'
                        },
                    ],

                },
            ]
        } />},
        {
            key:'Vacant',
            label:'Vacant',
            icon: <Home/>,
            description: 'Homes for sale by owner, no realtor fees',
            href: '/regina/home-flips',
            component:<PropertyCarousel properties={
                [
                    {
                        name: '123 Main St',
                        id: '227-litzenberger-cres',
                        sqft: 2000,
                        bedrooms: 3,
                        bathrooms: 2,
                        email: 'jphyqr@gmail.com',
                        phone: '306-555-5555',
                        price: 365000,
                        honestDoorPrice: 453800,
                        closestSchool: 'WKC',
                        yearBuilt: 1970,
                        condition: 'Good',
                        propertyType: 'Single Family',
                        src: '227-litzenberger-cres.png',
                        sellerCommision: 2,
                        good: ['New Roof', 'Braced', '275K reno in 2017', '2 furnaces', '200 amp panel', 'New floor'],
                        bad: ['Ceiling touch ups', 'Tile work' ],
                        ugly: ['Unfinished basement'],

                        priceAdjustments:[
 
                            {
                                amount: -15000,
                                reason: 'Finish Basement Bedrooms (already framed, windows and roughin)'
                            },
                            {
                                amount: -6000,
                                reason: 'Basement Bath'
                            },
                            {
                                amount: -5000,
                                reason: 'Counter Tops Upstairs'
                            },
                            {
                                amount: -2000,
                                reason: 'Plumbing/Electrical Basement'
                            }
                        ],
                        pricing: 'HD says bed room.  Actually 3 + den on main level.  Basement has framing and egress windows installed for 2 more large bedrooms.  Roughin for toilet and sink but need to go underslab for basement shower.  '
                    },
                
                ]
            } />},
        {
            key:'Small Jobs',
            label:'Small Jobs',
            icon: <Wrench/>,
            description: 'Homes for sale by owner, no realtor fees',
            href: 'regina/rentals',
            component:<FreelanceCarousel filters={
                [
                    'clean floor', 'replace toilet', 'fix trim', 'dump runs', 'demo wall', 'pack boxes', 'paint bedroom', 'fix outlet', 'hang tv'
                ]
            } freelancers={
                [
     
                    {
                        name: 'Michael',
                        id: '456',
                        intro: 'Full service handly man with excellent tile work',
                        src: 'michael.png',
                        degree: 'Tile Setter',
                        school: 'Sask Polytech',
                        rate: 40,
                        email:'jphyqr@gmail.com',
                        phone: '306-555-5555',
                        images:['real-estate-1.png', 'real-estate-2.png'],
                        services: ['clean floor', 'replace toilet', 'fix trim', 'dump runs', 'demo wall', 'paint bedroom', 'hang tv' ]
                        
                    },
                    {
                        name: 'Jessica',
                        email:'jphyqr@gmail.com',
                        phone: '306-555-5555',
                        id: '456',
                        intro: 'Full service handly man with excellent tile work',
                        src: 'michael.png',
                        degree: 'Tile Setter',
                        school: 'Sask Polytech',
                        rate: 40,
                        services: ['clean floor', 'pack boxes' ]
                        
                    },
                ]
            } />},
            // {
            //     key:'Downsize Services',
            //     label:'Downsize Services',
            //     icon: <HelpingHand/>,
            //     description: 'Homes for sale by owner, no realtor fees',
            //     href: 'regina/rentals',
            //     component:<FreelanceCarousel freelancers={
            //         [
         
            //             {
            //                 name: 'encore',
            //                 id: '456',
            //                 intro: 'Facebook seller',
            //                 src: 'encore.png',
            //                 degree: 'Tile Setter',
            //                 school: 'Sask Polytech',
            //                 rate: 40,
            //                 services: ['clean floor', 'pack boxes' ],
            //                 email:'jphyqr@gmail.com',
            //                 phone: '306-555-5555',
            //             },
            //         ]
            //     } />},
            //     {
            //         key:'Pet Friendly Rentals',
            //         label:'Pet Friendly Rentals',
            //         icon: <Paintbrush/>,
            //         description: 'Homes for sale by owner, no realtor fees',
            //         href: 'regina/rentals',
            //         component:<FreelanceCarousel freelancers={
            //             [
             
            //                 {
            //                     name: 'Michael',
            //                     id: '456',
            //                     intro: 'Full service handly man with excellent tile work',
            //                     src: 'michael.png',
            //                     degree: 'Tile Setter',
            //                     school: 'Sask Polytech',
            //                     rate: 40,
            //                     services: ['clean floor', 'pack boxes' ],
            //                     email:'jphyqr@gmail.com',
            //                     phone: '306-555-5555',
            //                 },
            //             ]
            //         } />},

            //         {
            //             key:'Monthly Furnished Rentals',
            //             label:'Monthly Furnished Rentals',
            //             icon: <Paintbrush/>,
            //             description: 'Homes for sale by owner, no realtor fees',
            //             href: 'regina/rentals',
            //             component:<FreelanceCarousel freelancers={
            //                 [
                 
            //                     {
            //                         name: 'Michael',
            //                         id: '456',
            //                         intro: 'Full service handly man with excellent tile work',
            //                         src: 'michael.png',
            //                         degree: 'Tile Setter',
            //                         school: 'Sask Polytech',
            //                         rate: 40,
            //                         services: ['Tile', 'Drywall', 'Painting', 'Plumbing', 'Electrical']
                                    
            //                     },
            //                 ]
            //             } />},
            //     {
            //         key:'Referred Tennants',
            //         label:'Referred Tennants',
            //         icon: <Paintbrush/>,
            //         description: 'Homes for sale by owner, no realtor fees',
            //         href: 'regina/rentals',
            //         component:<FreelanceCarousel freelancers={
            //             [
             
            //                 {
            //                     name: 'Michael',
            //                     id: '456',
            //                     intro: 'Full service handly man with excellent tile work',
            //                     src: 'michael.png',
            //                     degree: 'Tile Setter',
            //                     school: 'Sask Polytech',
            //                     rate: 40,
            //                     services: ['Tile', 'Drywall', 'Painting', 'Plumbing', 'Electrical']
                                
            //                 },
            //             ]
            //         } />},
]}
/>


   




}