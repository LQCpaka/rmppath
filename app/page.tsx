"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {  buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowDownToLine, CheckCircle2, SettingsIcon } from "lucide-react";
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
              words={['Yo, chào mừng đã đến chốn khỉ ho cò sủa!']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <MaxWidthWrapper>
        <div className="pt-5 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-blue-600">Otherworld Legends Wiki </span>
            nơi lưu trữ, các dữ liệu từ game Otherworld Legends
          </h1>
          <p className="mt-6 text-lg max-w-prose text-gray-100">
            Tip, Trick, Dữ liệu, Hướng dẫn, và nhiều hơn nữa...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/tim-kiem' className={`grow basis-0 ${buttonVariants()}`}>Tìm hiểu thêm</Link>
          </div>
        </div>
      </MaxWidthWrapper>
        </div>
        
      </section>

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
