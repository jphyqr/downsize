"use client";
import DeepDashboard from "@/components/layout/deep-dashboard/deep-dashboard";
import HeroSection from "@/components/layout/hero-section";
import { Button } from "@/components/ui/button";
import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Code,
  Github,
  Hammer,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  Spade,
} from "lucide-react";
import Image from "next/image";
import BackStory from "./_components/backstory";
import CrowdpassProjects from "./_components/crowdpass-projects";
import ReactProjects from "./_components/regina-preview";
import Faqs from "@/components/layout/faqs";
import { scrolltoHash } from "@/lib/utils";
import { Muted } from "@/components/typography/muted";
import { BlockQuotes } from "@/components/typography/blockquotes";
import { Lead } from "@/components/typography/lead";
import { Large } from "@/components/typography/large";
import { TypeH2 } from "@/components/typography/h2";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TypeH3 } from "@/components/typography/h3";
import { TypeP } from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ReginaPreview from "./_components/regina-preview";
import { ListPropertyForm } from "@/components/list-property-form";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);

  const icons = [
    {
      icon: <GitHubLogoIcon />,
      // label: 'Github',
      href: "https://www.github.com/jphyqr",
    },
    {
      icon: <LinkedInLogoIcon />,
      //   label: 'Linkedin',
      href: "https://www.linkedin.com/in/johnhashem/",
    },
    {
      icon: <TwitterLogoIcon />,
      //  label: 'Twitter',
      href: "https://twitter.com/hashbuilds",
    },
  ];
  
  const [openListHomeDialog, setOpenListHomeDialog] = useState(false);
  const [openForSellersDialog, setOpenForSellersDialog] = useState(false);
  return (

    <>
    <Dialog
        open={openListHomeDialog ? true : false}
        onOpenChange={setOpenListHomeDialog}
      >
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>List Property Form</DialogTitle>
            <DialogDescription>
              
                  <Lead className='py-10'>we currently are in beta.  Contact us and we will onboard your property</Lead>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
         
          <ListPropertyForm onSuccess={()=>{
            setOpenListHomeDialog(false)
          
          }}  name={'App'} email={'jphyqr@gmail.com'} phone={'34423423424'}/>
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
   
    <main className="flex min-h-screen flex-col items-center    max-w-6xl ml-auto mr-auto  pb-96">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Disclaimer</DialogTitle>
            <DialogDescription>
              <Lead className="mt-2 mb-2">
                Profiles for frontend developers are sort of dumb.
              </Lead>

              <TypeP>
                The lines between code, no code, design, UI kits and boiler
                plates are so blurred that it is difficult to establish credit.
              </TypeP>

              <TypeP>
                Look at this modal. Five years ago I would have built the entire
                thing from scratch. A few years ago, used a library, in 2024 I
                copy paste a pre configed (shadcn) of a headless UI (radix) and
                added a few borrowed utility classes (tailwind). Tomorrow it
                will be AI generated.
              </TypeP>

              <TypeP>
                ..And lets be honest.. if I built a successful e2e project with
                lots of users, Id be swinging for the fences with my own start
                up...
              </TypeP>
              <TypeP>
                I have worked on a few larger projects and I can get references,
                but if you are reading this you are probably a start up or ecom
                site and dont really care so much about my large project
                contributions.
              </TypeP>
              <TypeP>
                So my vision is to feature my personality and creativity. There
                are tones of low cost developers on upwork, but{" "}
                <strong>
                  {" "}
                  consider me if you want a high agency no-bagage product
                  engineer, whose won in multiple competitive domains, and
                  onboards obsession easily.{" "}
                </strong>
              </TypeP>

              <Separator className="mt-4 mb-4" />

              <div className="flex  flex-wrap gap-1 items-center">
                <Label>My Tech Stack</Label>
                <Link href="www.tnvisa.com" target="blank">
                  <Badge variant={"destructive"}>
                    TN Visa Ready <ArrowTopRightIcon />
                  </Badge>
                </Link>
                <Badge variant={"destructive"}>Relocation Ready</Badge>
                <Badge variant={"destructive"}>Content Ready</Badge>
                <Badge variant={"destructive"}>In Office Ready</Badge>
                <Badge variant={"destructive"}>Team Building Ready</Badge>
              </div>
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

      <DeepDashboard
        topTabs={[
          {
            key: "Edmonton",
            icon: (
              <Image
                src="next.svg"
                alt="Vercel Logo"
                className="dark:invert"
                layout="fill"
                priority
              />
            ),
            component: <div>Next Projects</div>,
            label: "Edmonton",
            todo: true,
          },
          {
            key: "Regina",
            icon: <Code />,
            label: "Regina",
            description: "Regina, SK",
            component: <ReginaPreview />,
          },
          {
            key: "Saskatoon",
            icon: <LucideLinkedin />,
            label: "Saskatoon",
            component: <div>Saskatoon</div>,
            todo: true,
          },
          {
            key: "Winnipeg",
            icon: <LucideLinkedin />,
            label: "Winnipeg",
            component: <div>Winnipeg</div>,
            todo: true,
          },
          {
            key: "Brandon",
            icon: <LucideLinkedin />,
            label: "Brandon",
            component: <div>Brandon</div>,
            todo: true,
          },
          {
            key: "Red Deer",
            icon: <Spade />,
            label: "Red Deer",
            component: <div>Red Deer</div>,
            todo: true,
          },
        ]}
      />
      <div id="hero" className="mb-14" />
      <HeroSection
        icons={icons}
        h1="Home Selling Bliss"
        p1="Privately put your home on the market in 5 minutes.  No agents. No Facebook.  No Digital Trace.  No Fees.  No Hassle.  No Stress."
        p2="teest"
        primaryButton={
          <Button onClick={() => setOpenListHomeDialog(true)} variant="default">
            List Home
          </Button>
        }
        secondaryButton={
          <Button onClick={() => scrolltoHash("backstory")} variant="outline">
            Back Story
          </Button>
        }
        videoUrl="https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/AECSEOINTRO-IeZSZduqQ2uoxOkryjvjCRwmwNV8T7.mp4" //https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/vsl_4-9UiWNO4erDe3m5fau5X1YlwMxD7FHL.mp4'
        thumbnailUrl="/thumbnail.png"
        videoAltText="In lui of a VSL, here is some edutainment on SEO so you can read between the lines of my personality.  May update to a VSL after I get a haircut."
      />


<section className='p-4'>
<Lead>
        <strong>Downsizing sucks,</strong> you are on the brink of a new chapter, but the burden of selling your home is too much to bear.  The current ecosystem is great for selling newly renovated places with great photos.. but what if you are still living there?  The good news is there are many people out there who dont care.  Dont waste all your money trying to make your house perfect to appease the current platforms like MLS and Meta Marketplace.  List your home quietly and see if you can find a buyer who is willing to take it as is.  We dont index your property by address.  Be candid about the state of the house and the issues and if you change your mind and decide to renovate, great.  
      </Lead>
</section>



      <div id="backstory" className="mb-14" />
      <BackStory />

      <div id="projects" className="mb-14" />

      <div id="faqs" className="mb-14" />
      <Faqs
        faqs={[
          {
            question: "What is FSBO?",
            answer:
              "FSBO is a marketplace where people can list their homes in as is condition.  Buyers understand that they are buying the home as is and the buyer is not responsible for any repairs.",
          },
          {
            question: "How does FSBO work?",
            answer:
              "FSBO is a marketplace where people can list their homes in as is condition.  Buyers understand that they are buying the home as is and the buyer is not responsible for any repairs.",
          },
          {
            question: "What do you charge?",
            answer:
              "Right now we are not charging anything. We are validating that this is a helpful product.",
          },
          {
            question: "What do you charge?",
            answer:
              "Right now we are not charging anything. We are validating that this is a helpful product.",
          },
        ]}
      />
    </main>

    </>
  );
}
