import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { StoreIcon } from 'lucide-react'

const CouponCard = (
    restaurant: string,
    title: string,
    description: string,
    index: number,
) => {
    return (
        <Card className="py-4 hover:scale-105 transition-all hover:shadow-xl" key={index}>
            <CardHeader className="px-4 ">
                <div className="pb-2 flex items-center gap-2">
                    <Button size={'icon'} variant={'outline'} className=" rounded-full"><StoreIcon className="text-primary" /></Button>
                    <span className=' font-semibold'>{restaurant}</span>
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="px-4">
                <Button variant={'outline'} className="w-full">Get Code</Button>
            </CardFooter>
        </Card>
    )
}

export default CouponCard