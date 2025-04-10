import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Baloo_2 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushlane",
  description: "Food Order and Delivery Application for everyone who always hungry and don't waste much time and money.",
};

const baloo = Baloo_2({
  weight: '800',
  display: 'swap',
})


export const data: {
  header: string,
  links: {
    label: string,
    link: string
  }[]
}[] = [
    {
      header: "Company",
      links: [
        {
          label: "About",
          link: "/about"
        },
        {
          label: "Blog",
          link: "/blog"
        },
        {
          label: "Contact",
          link: "/contact"
        },
        {
          label: "Career",
          link: "/career"
        }
      ]
    }, {
      header: "Follow us",
      links: [
        {
          label: "Facebook",
          link: "#",
        }, 
        {
          label: "Instagram",
          link: "#"
        }, 
        {
          label: "X (Twitter)",
          link: "#"
        },
        {
          label: "Youtube",
          link: "#"
        }
      ]
    }, {
      header: "More",
      links: [
        {
          label: "Help Center",
          link: "#",
        }, 
        {
          label: "Privacy Policy",
          link: "#"
        }, 
        {
          label: "Terms of Condition",
          link: "#"
        },
        {
          label: "Press Kit",
          link: "#"
        }
      ]
    }
  ]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <div className="flex-1 w-full flex flex-col gap-0 ">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-orange-50 dark:bg-zinc-900">
                <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-2 items-center font-semibold">
                    <Image src={"/icon.png.png"} width={200} height={250} className="w-10 h-full" alt="My Meghalaya logo" />
                    <Link href={"/"} className="flex">
                      <span className={cn(baloo.className, " text-base pr-1")}>
                        RUSHLANE
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" hidden sm:flex gap-3 items-center">
                      <Link href={"#"} >
                        <Button variant={'ghost'} >
                          Orders
                        </Button>
                      </Link>
                    </div>
                    <Button size={'sm'} asChild>
                      <Link href={"/login"}>
                        Login
                      </Link>
                    </Button>
                  </div>
                </div>
              </nav>
              <div className="">
                {children}
              </div>
              <footer className="pb-14 sm:pb-5 w-full bg-orange-50 dark:bg-zinc-900">
                <div className='flex justify-center px-5 pt-10'>
                  <div className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl w-full pb-5 sm:pb-10 border-b">
                    <div className=' flex flex-col justify-between pb-0 sm:pb-5'>
                      <div className="flex flex-col gap-2" >
                        <div className="flex gap-2 items-center font-semibold">
                          <Image src={"/icon.png.png"} width={200} height={250} className="w-10 h-full" alt="My Meghalaya logo" />
                          <Link href={"/"} className="flex">
                            <span className={cn(baloo.className, " text-base pr-1")}>
                              RUSHLANE
                            </span>
                          </Link>
                        </div>
                        <div className="sm:py-3 pb-3 text-xs sm:text-sm text-gray-500 w-3/4 sm:w-1/2 ">
                          Food Order and Delivery Application for everyone who always hungry and don't waste much time and money.
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 justify-start sm:justify-end text-xs">
                      {
                        data.map((group, i) => (
                          <div key={i}>
                            <div className="py-5 text-sm font-bold" >{group.header}</div>
                            <div className="flex flex-col gap-5 text-gray-600">
                              {
                                group.links.map((item, i) => (
                                  <Link href={item.link} key={i}>
                                    {item.label}
                                  </Link>
                                ))
                              }
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-5 text-sm text-gray-500">
                  <div className="flex items-center justify-between max-w-7xl w-full pb-10 px-5 sm:px-0 gap-3">
                    <div className="text-xs sm:text-sm">@2025 Ruhslane. All right reserved</div>
                    <div className=" flex items-center gap-2">
                      <span>Made with ♥️ in Tura</span> <ThemeSwitcher />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
