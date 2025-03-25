import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { Locate, Search, Store, StoreIcon } from "lucide-react";
import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BiRestaurant } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { MdStar, MdStart } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/food-card";

const baloo = Baloo_2({
  weight: '800',
  display: 'swap',
})

const trendingFoods = [
  {
    title: "Hyderabade Biryani",
    restaurant: "Briyani And Rolls",
    rating: 4.5,
    price: 200,
    image: "/biryani.png"
  },
  {
    title: "Spicy Chicken Ride",
    restaurant: "Foodie's World",
    rating: 4.5,
    price: 240,
    image: "/pizza.png"
  },
  {
    title: "Chicken Hakka Noodles",
    restaurant: "Food Park",
    rating: 4.5,
    price: 260,
    image: "/noodels.png"
  },
  {
    title: "Chicken Cheese Burger",
    restaurant: "Food Park",
    rating: 4.5,
    price: 260,
    image: "/burger.png"
  }
]



export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className=" relative ">
        <div className="bg-orange-50 dark:bg-zinc-900 rounded-t-3xl border border-muted shadow-lg">
          <div className=" absolute top-1/4 left-25 rotate-20">
            <Image src={"/arrow.png"} width={1920} height={1080} alt="Background" className="h-[5rem] w-auto dark:invert-100 animate-bounce"></Image>
          </div>
          <div className=" absolute top-1/5 right-25 scale-x-[-1] -rotate-20">
            <Image src={"/arrow.png"} width={1920} height={1080} alt="Background" className="h-[5rem] w-auto dark:invert-100 animate-bounce"></Image>
          </div>
          <div className="flex gap-3 flex-col py-10">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <div className={cn(baloo.className, "text-8xl font-black text-primary")}>Easy order, easy life</div>
              <div className="text-base text-muted-foreground">Best food order app in town, only swipe and choose whatever <br />food you want</div>
            </div>
            <div className="flex items-center justify-center py-5">
              <div className="flex gap-2">
                <Select>
                  <div className="flex border-primary border-4 rounded-lg">
                    <div className=" bg-primary flex items-center px-2">
                      <Locate className=" stroke-white dark:stroke-black" />
                    </div>
                    <SelectTrigger className="w-[180px] rounded-none border-none">
                      <SelectValue placeholder="Select a fruit" className="" />
                    </SelectTrigger>
                  </div>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="flex border-primary border-4 rounded-lg">
                  <div className=" bg-primary flex items-center px-2">
                    <Search className=" stroke-white dark:stroke-black" />
                  </div>
                  <Input placeholder="Search for food.." className="rounded-sm border-none outline-none"></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <div className=" h-[20rem] w-[20rem] -bottom-5">
              <Image src={"/biryani.png"} width={320} height={320} alt="Biryani" className=" hover:rotate-[360deg] transition-all hover:scale-105 duration-500"></Image>
            </div>
            <div className=" h-[25rem] w-[25rem]">
              <Image src={"/pizza.png"} width={400} height={400} alt="Pizza" className=" hover:rotate-[360deg] transition-all hover:scale-105 duration-500"></Image>
            </div>
            <div className=" h-[20rem] w-[20rem]">
              <Image src={"/noodels.png"} width={320} height={320} alt="Noodles" className=" hover:rotate-[360deg] transition-all hover:scale-105 duration-500"></Image>
            </div>
          </div>
          <div className="bg-primary w-full h-[12rem] flex items-center justify-around text-white py-5">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-extrabold">100+</div>
              <div className="text-lg">Trusted Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-extrabold">24/7</div>
              <div className="text-lg">Fast Delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-extrabold">4.8/5</div>
              <div className="text-lg">Customer Ratings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-extrabold">31+</div>
              <div className="text-lg"> Restaurants</div>
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, " text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Trending
              </span>
              <span className=" text-primary">
                Foods
              </span>
            </div>
            <div className="text-muted-foreground text-sm">
              Top foods serving from the best resuturants in the town
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {
                trendingFoods.map((food, i) => (
                  FoodCard(food.title, food.restaurant, food.rating, food.price, food.image, i)
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
