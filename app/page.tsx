"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowDownToLine, CheckCircle2, SettingsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

// Types for API response
type ModItem = {
  id: string
  name: string
  version: string
  author: string
  status: string
  download_count: number
  created_at: string
  categories: string[]
  hero_desktop?: string
  hero_mobile?: string
  uploader_name?: string
}

type ModsResponse = {
  items: ModItem[]
  page: number
  limit: number
  total: number
}

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
  // State to hold mods
  const [mods, setMods] = useState<ModItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      try {
        const res = await fetch("https://api.morphworkshop.com/api/v1/mods", {
          method: "GET",
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: ModsResponse = await res.json()
        if (isMounted) setMods(data.items ?? [])
      } catch (e: any) {
        if (isMounted) setError(e?.message ?? "Failed to load mods")
      } finally {
        if (isMounted) setLoading(false)
      }
    })()
    return () => {
      isMounted = false
    }
  }, [])

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
      <Image src="https://assets.morphworkshop.com/mods/ee2b9b1d-6450-405e-a0ab-c9672051b33c/images/1755773649996439000-preview-4-1755773649868.jpg" alt="20" width={200} height={200} />
      <Separator className="bg-gray-700 w-[30vw] mx-auto" />
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

      {/* Mods list */}
      <section className="border-t">
        <MaxWidthWrapper className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Mods mới nhất</h2>

          {loading && <p className="text-muted-foreground">Đang tải...</p>}
          {error && <p className="text-red-400">Lỗi: {error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mods.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-gray-800 bg-black/30 overflow-hidden"
                >
                  <div className="relative h-40 w-full">
                    {(item.hero_desktop || item.hero_mobile) ? (
                      <Image
                        src={item.hero_desktop || item.hero_mobile!}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-800" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.author} • v{item.version}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.categories.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className="text-xs bg-gray-800 text-gray-200 px-2 py-0.5 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </MaxWidthWrapper>
      </section>
    </>
  );
}
