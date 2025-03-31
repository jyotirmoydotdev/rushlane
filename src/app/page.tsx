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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { BiRestaurant } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { MdStar, MdStart } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/food-card";
import CouponCard from "@/components/coupon-card";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";

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
    rating: 4,
    price: 240,
    image: "/pizza.png"
  },
  {
    title: "Chicken Hakka Noodles",
    restaurant: "Food Park",
    rating: 3.5,
    price: 260,
    image: "/noodels.png"
  },
  {
    title: "Chicken Cheese Burger",
    restaurant: "Food Park",
    rating: 4,
    price: 260,
    image: "/burger.png"
  }
]

const topCoupons = [
  {
    restaurant: "Briyani And Rolls",
    title: "50% off on all orders",
    description: "Get 50% off on all orders above 500",
  },
  {
    restaurant: "Foodie's World",
    title: "30% off on all orders",
    description: "Get 30% off on all orders above 300",
  },
  {
    restaurant: "Food Park",
    title: "20% off on all orders",
    description: "Get 20% off on all orders above 200",
  },
  {
    restaurant: "Food Park",
    title: "20% off on all orders",
    description: "Get 20% off on all orders above 200",
  },
]

const chefsRecommendations = [
  {
    img: "/pizza.png",
    title: "Pizza"
  },
  {
    img: "/burger.png",
    title: "Burger"
  },
  {
    img: "/noodels.png",
    title: "Noodles"
  },
  {
    img: "/biryani.png",
    title: "Biryani"
  },
  {
    img: "/cake.png",
    title: "Cake"
  },
  {
    img: "/Chicken.png",
    title: "Chicken"
  },
  {
    img: "/non-veg-thali.jpg",
    title: "Non Veg Thali"
  },
  {
    img: "/thali.png",
    title: "Thali"
  },
  {
    img: "/Chicken.png",
    title: "Chicken"
  },
  {
    img: "/non-veg-thali.jpg",
    title: "Non Veg Thali"
  },
  {
    img: "/thali.png",
    title: "Thali"
  }
]

const topResuturants = [
  {
    img: "/restaurant/bless-bakery.jpg",
    title: "Bless Bakery",
  },
  {
    img: "/restaurant/food-park.jpg",
    title: "Food Park",
  }
  , {
    img: "/restaurant/jadoh-mi-stall.jpg",
    title: "Jadoh Mi Stall",
  }
  , {
    img: "/restaurant/jakmatang-kurio.jpg",
    title: "Jakmatang Kurio",
  }
  , {
    img: "/restaurant/jh-hotel.jpg",
    title: "J.H Hotel",
  }
  , {
    img: "/restaurant/river-stone.jpg",
    title: "River Stone",
  }
  , {
    img: "/restaurant/tabolchu.jpg",
    title: "The Ta.Bolchu Lounge",
  }
  , {
    img: "/restaurant/the-chefs-wife-cafe.jpg",
    title: "The Chef's Wife Cafe",
  }
  , {
    img: "/restaurant/the-juice-bar.jpg",
    title: "The Juice Bar",
  }
  , {
    img: "/restaurant/the-neems.jpg",
    title: "The Neems",
  }
  , {
    img: "/restaurant/the-red-door-cafe.jpg",
    title: "The Red Door Cafe",
  }
  , {
    img: "/restaurant/waldis-cafe.jpg",
    title: "Waldi's Cafe",
  }
]

const foodItems = [
  {
    title: "Vegan Salad",
    restaurant: "Dragon Wok",
    rating: 4.3,
    price: 180,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    title: "Margherita Pizza",
    restaurant: "Luigi's Pizzeria",
    rating: 4.7,
    price: 220,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    title: "Classic Cheeseburger",
    restaurant: "Burger Hub",
    rating: 4.5,
    price: 200,
    image: "https://images.unsplash.com/photo-1603508102983-99b101395d1a"
  },
  {
    title: "Hyderabadi Biryani",
    restaurant: "Biryani House",
    rating: 4.6,
    price: 250,
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
  },
  {
    title: "Tandoori Chicken",
    restaurant: "Spice Junction",
    rating: 4.4,
    price: 300,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91"
  },
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
    rating: 4,
    price: 240,
    image: "/pizza.png"
  },
  {
    title: "Chicken Hakka Noodles",
    restaurant: "Food Park",
    rating: 3.5,
    price: 260,
    image: "/noodels.png"
  }
];




export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-2 sm:py-5 px-2">
      <div className="">
        <div className="relative rounded-t-3xl border border-muted shadow-lg bg-gradient-to-r from-orange-50/10 to-yellow-50 dark:from-zinc-900 dark:to-zinc-800 ">
          <div className="absolute top-[8rem] sm:top-1/4 left-0 sm:left-25 rotate-20">
            <Image src={"/arrow.png"} width={1920} height={1080} alt="Background" className="h-[2rem] sm:h-[5rem] pointer-events-none w-auto dark:invert-100 animate-bounce"></Image>
          </div>
          <div className="absolute top-1/3 sm:top-1/5 right-0 sm:right-25 scale-x-[-1] -rotate-20">
            <Image src={"/arrow.png"} width={1920} height={1080} alt="Background" className="h-[2rem] sm:h-[5rem] pointer-events-none w-auto dark:invert-100 animate-bounce"></Image>
          </div>
          <div className="flex gap-3 flex-col py-10">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <div className={cn(baloo.className, "text-4xl sm:text-8xl font-black text-primary")}>Easy order, easy life</div>
              <div className="text-xs sm:text-base text-muted-foreground">Best food order app in town, only swipe and choose whatever <br />food you want</div>
            </div>
            <div className="flex items-center justify-center py-5">
              <div className="flex flex-col sm:flex-row gap-2">
                <Select>
                  <div className="flex border-primary border-4 rounded-lg">
                    <div className="bg-primary flex items-center px-2">
                      <Locate className="stroke-white dark:stroke-black" />
                    </div>
                    <SelectTrigger className="w-full sm:w-[180px] rounded-none border-none">
                      <SelectValue placeholder="Select a location" className="" />
                    </SelectTrigger>
                  </div>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Location</SelectLabel>
                      <SelectItem value="apple">Hawakhana</SelectItem>
                      <SelectItem value="banana">Babupara</SelectItem>
                      <SelectItem value="blueberry">Upper Chandmari</SelectItem>
                      <SelectItem value="grapes">Dobasipara</SelectItem>
                      <SelectItem value="pineapple">Bazar Area</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="flex border-primary border-4 rounded-lg">
                  <div className="bg-primary flex items-center px-2">
                    <Search className="stroke-white dark:stroke-black" />
                  </div>
                  <Input placeholder="Search for food.." className="rounded-sm border-none outline-none"></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center items-end ">
            <div className="h-[8rem] w-[8rem] sm:h-[20rem] sm:w-[20rem] -bottom-5">
              <Image src={"/biryani.png"} width={320} height={320} alt="Biryani" className="hover:rotate-[360deg] transition-all hover:scale-105 duration-500"></Image>
            </div>
            <div className="h-[8rem] w-[9rem] sm:h-[25rem] sm:w-[25rem]">
              <Image src={"/pizza.png"} width={400} height={400} alt="Pizza" className="hover:rotate-[360deg] transition-all hover:scale-105 duration-500"></Image>
            </div>
            <div className="h-[8rem] w-[8rem] sm:h-[20rem] sm:w-[20rem]">
              <Image src={"/noodels.png"} width={320} height={320} alt="Noodles" className="hover:rotate-[360deg] transition-all hover:scale-105 duration-500"></Image>
            </div>
          </div>
          <div className="bg-primary w-full h-fit sm:h-[12rem] flex items-center justify-around text-white py-5 px-3">
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-5xl font-extrabold">100+</div>
              <div className="text-xs text-center sm:text-lg">Trusted Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-5xl font-extrabold">24/7</div>
              <div className="text-xs text-center sm:text-lg">Fast Delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-5xl font-extrabold">4.8/5</div>
              <div className="text-xs text-center sm:text-lg">Customer Ratings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg sm:text-5xl font-extrabold">31+</div>
              <div className="text-xs text-center sm:text-lg"> Restaurants</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, "text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Our
              </span>
              <span className="text-primary">
                Services
              </span>
            </div>
            <div className="text-muted-foreground text-sm">
              We provide the best services in town
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex items-center justify-between bg-primary text-white p-5 rounded-lg shadow-md">
              <div>
                <div className="text-xl font-semibold">Rushlane Food</div>
                <div className="text-sm w-2/3">Delicious food delivered to your doorstep</div>
              </div>
              <div className="text-4xl text-white">
                <HiOutlineBuildingStorefront />
              </div>
            </div>
            <div className="flex items-center justify-between bg-blue-400 text-white p-5 rounded-lg shadow-md">
              <div>
                <div className="text-xl font-semibold">Rushlane Pickup</div>
                <div className="text-sm w-2/3">Pickup and drop service at your convenience</div>
              </div>
              <div className="text-4xl text-white">
                <TbTruckDelivery />
              </div>
            </div>
            <div className="flex items-center justify-between bg-emerald-400 text-white p-5 rounded-lg shadow-md">
              <div>
                <div className="text-xl font-semibold">RushMart</div>
                <div className="text-sm w-2/3">Instant Grocery service at your doorstep</div>
              </div>
              <div className="text-4xl">
                <BiRestaurant />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 py-0 sm:py-4 px-0 sm:px-4">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, "text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Trending
              </span>
              <span className="text-primary">
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
                trendingFoods.map((food, i) => (FoodCard(food.title, food.restaurant, food.rating, food.price, food.image, i)))
              }
            </div>
          </div>
        </div>
        <div className="mt-10  py-0 sm:py-4 px-0 sm:px-4">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, "text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Top
              </span>
              <span className="text-primary">
                Offers
              </span>
            </div>
            <div className="text-muted-foreground text-sm">
              Find discounts and offers on your favorite foods
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {topCoupons.map((coupon, i) => (CouponCard(coupon.restaurant, coupon.title, coupon.description, i)))}
            </div>
          </div>
        </div>
        <div className="mt-10 bg-accent  py-0 sm:py-4 px-0 sm:px-4">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, "text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Chef's
              </span>
              <span className="text-primary">
                Recommendations
              </span>
            </div>
            <div className="text-muted-foreground text-sm">
              A Taste of Perfection, Recommended by Our Chefs
            </div>
          </div>
          <Carousel>
          <CarouselContent >
              {
                chefsRecommendations.map((chef, i) => (
                  <CarouselItem key={i} className=" basis-1/2 sm:basis-1/3 md:basis-1/6">
                  <div className="flex flex-col items-center gap-1">
                    <div className=" border rounded-full border-muted overflow-hidden w-[150px] h-[150px]">
                      <Image src={chef.img} className=" w-full h-full object-cover" width={200} height={200} alt={chef.title}></Image>
                    </div>
                    <div className=" text-xl font-semibold line-clamp-1">{chef.title}</div>
                  </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
        <div className="mt-10  py-0 sm:py-4 px-0 sm:px-4">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, "text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Top
              </span>
              <span className="text-primary">
                Resturants
              </span>
            </div>
            <div className="text-muted-foreground text-sm">
              Top resuturants in the town
            </div>
          </div>
          <Carousel>
          <CarouselContent >
            {
                topResuturants.map((res, i) => (
                  <CarouselItem key={i} className=" basis-1/2 sm:basis-1/3 md:basis-1/6">
                  <div className="flex flex-col items-center gap-1">
                    <div className=" border rounded-full border-muted overflow-hidden w-[150px] h-[150px]">
                      <Image src={res.img} className=" w-full h-full object-cover" width={200} height={200} alt={res.title}></Image>
                    </div>
                    <div className=" text-xl font-semibold line-clamp-1">{res.title}</div>
                  </div>
                  </CarouselItem>
                ))
              }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

          {/* <div className=" w-full overflow-x-scroll">
            <div className="flex gap-5">
              {
                topResuturants.map((res, i) => (
                  <div className="flex flex-col items-center gap-1" key={i}>
                    <div className=" border rounded-full border-muted overflow-hidden w-[150px] h-[150px]">
                      <Image src={res.img} className=" w-full h-full object-cover" width={200} height={200} alt={res.title}></Image>
                    </div>
                    <div className=" text-xl font-semibold line-clamp-1">{res.title}</div>
                  </div>
                ))
              }
            </div>
          </div> */}
        </div>
        <div className="mt-10  py-0 sm:py-4 px-0 sm:px-4">
          <div className="flex flex-col pb-5">
            <div className={cn(baloo.className, "text-3xl font-semibold flex gap-2 items-center")}>
              <span>
                Order
              </span>
              <span className="text-primary">
                Now
              </span>
            </div>
            <div className="text-muted-foreground text-sm">
              Foods serving from the best resuturants in the town
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {
                foodItems.map((food, i) => (FoodCard(food.title, food.restaurant, food.rating, food.price, food.image, i)))
              }
            </div>
          </div>
        </div>
        <div className=" bg-primary mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-4">
            <div className="flex justify-center">
              <Image src={"/rushlane-mobile.png"} width={300} height={300} alt="mobile" className=" object-cover"></Image>
            </div>
            <div className="flex items-stretch flex-col py-10 px-4">
              <div className=' flex flex-col justify-between pb-0 sm:pb-5'>
                <div className="flex flex-col" >
                  <div className="flex gap-2 items-center font-semibold">
                    <Image src={"/icon.png.png"} width={200} height={250} className="w-10 h-full" alt="My Meghalaya logo" />
                    <Link href={"/"} className="flex">
                      <span className={cn(baloo.className, " text-base pr-1 text-white")}>
                        RUSHLANE
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-5xl font-black text-white">Get the Rushlane App</div>
              <div className="text-lg text-white">For best offers and discounts curated specially for you.</div>
              <div className="flex gap-5 items-center w-full py-5">
                <Image src={"/google.avif"} width={200} height={60} className="w-fit h-[3rem]" alt="Google"></Image>
                <Image src={"/apple.avif"} width={200} height={60} className="w-fit h-[3rem]" alt="Google"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
