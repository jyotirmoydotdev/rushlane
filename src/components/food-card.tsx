import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { TiStarFullOutline } from 'react-icons/ti'
import Image from 'next/image'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { Button } from './ui/button'

const FoodCard = (
    title: string,
    restaurant: string,
    rating: number,
    price: number,
    image: string,
    index: number
) => {
    return (
        <Card className="py-4 gap-4" key={index}>
            <CardContent className=" px-4">
                <div className=" h-[10rem] overflow-hidden bg-muted border border-muted rounded-md relative">
                    <div className=" flex items-center gap-1 absolute bg-green-500 text-white rounded-sm px-1 top-2 left-2 text-sm">
                        <div className=""> <TiStarFullOutline className="" /></div>
                        <div className=" font-semibold">{rating}</div>
                    </div>
                    <Image src={image} width={240} height={240} alt="Biryani" className="rounded-lg h-[10rem] object-cover"></Image>
                </div>
            </CardContent>
            <CardHeader className="px-4">
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                    < HiOutlineBuildingStorefront /> {restaurant}
                </CardDescription>
            </CardHeader>
            <CardFooter className="px-4">
                <div className=" flex justify-between w-full items-center">
                    <div className="text-xl font-bold">
                        ₹ {price}
                    </div>
                    <Button> Add to Plate</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default FoodCard