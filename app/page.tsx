"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {  Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowDownToLine, CheckCircle2, SettingsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const perks = [
  {
    name: "Thử nghiệm tính năng",
    Icon: SettingsIcon,
    description: "Mọi thứ tại website đều là thử nghiệm",
  },
  {
    name: "Phí thời gian",
    Icon: CheckCircle2,
    description: "Là thứ bạn nhận được khi ghé website này",
  },
  {
    name: "Asset Miễn Phí",
    Icon: ArrowDownToLine,
    description: "Ở đây cấp cho bạn các asset game",
  },
]

export default function Home() {
  return (
    <>

      <section className="py-5 bg-[url(/image/FncmA07x_LehHd8kmlBbbIhoBEYP.gif)] h-full lg:h-[500px] bg-cover bg-no-repeat bg-center">
        <div className="flex-col items-center justify-center ">
          <h1 className="text-xl md:text-4xl lg:text-4xl font-bold text-white text-center pt-5">
            <Typewriter
              words={['Welcome to Otherworld Legends Wiki']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <MaxWidthWrapper>
      <Button className="mx-auto mt-10 mb-5" variant="ghost" size="icon" onClick={() => { window.open('https://assets.morphworkshop.com/mods/ee2b9b1d-6450-405e-a0ab-c9672051b33c/files/1755773651073915700-kotlin-compiler-2.2.0.zip', '_blank') }}>Xịn chào</Button>
          
        <div className="pt-5 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-blue-600">Otherworld Legends Wiki </span>
            nơi lưu trữ, các dữ liệu từ game Otherworld Legends
          </h1>
          <p className="mt-6 text-lg max-w-prose text-gray-100">
            Tip, Trick, Dữ liệu, Hướng dẫn, Data và nhiều hơn nữa...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/tim-kiem' className={`grow basis-0 ${buttonVariants()}`}>Tìm hiểu thêm</Link>
          </div>
        </div>
      </MaxWidthWrapper>
        </div>
        
      </section>
      <Image src="https://assets.morphworkshop.com/mods/24325758-9ebe-4fb5-ac4b-0513e165f667/images/1756301859040888800-hero-mobile-1756301858942.jpg" alt="20" width={200} height={200} />
      <Separator className="bg-gray-700 w-[30vw] mx-auto"/>
      <section className="border-t ">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center sm:block  md:items-start /*md:text-left*/ lg:block lg:text-center">
                <div className="md:flex-shrink-0 sm:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon size={24} />}
                  </div>
                </div>
                
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-white">{perk.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
