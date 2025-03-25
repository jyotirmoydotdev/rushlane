'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { BiHide, BiShow } from 'react-icons/bi';

const page = () => {
    const [passwordHide, setPasswordHide] = useState(true)
    return (
        <div className="w-screen sm:w-sm">
            <div className="flex flex-col justify-between gap-10 p-6">
                <div className="flex flex-col gap-3">
                    <div className="text-center pb-2">
                        <div className="font-semibold text-lg">Welcome back!</div>
                        <div className=" text-muted-foreground">Hello there, please login to continue </div>
                    </div>
                    <div className=" flex w-full justify-center relative items-center">
                        <div className='animate-pulse absolute w-[140px] h-[140px] gradien duration-75 rounded-full -z-10'></div>
                        <Image width={200} height={200} alt='Rushlane' src={"/icon.png.png"} className=' w-[8rem] transition-all'></Image>
                    </div>
                    <div className="space-x-2 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className=' font-semibold' htmlFor="email">Email</label>
                            <Input className='text-[16.1px] h-11 rounded-xl' type="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='font-semibold' htmlFor="password">Password</label>
                            <div className="relative flex items-center gap-2 ">
                                <Input className="text-[16.1px] h-11 rounded-xl" type={passwordHide ? 'password' : 'text'} name="password" placeholder="Enter your password" required />
                                <Button type="button" variant={'outline'} onClick={() => setPasswordHide(!passwordHide)}>
                                    {passwordHide ? <BiShow /> : <BiHide />}
                                </Button>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link href={"#"} className='text-sm text-blue-500'>
                                    Forget password?
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* or */}
                    <div className="relative py-4 flex justify-center items-center w-full">
                        <span className="w-full border-t border-gray-400 absolute -z-10 "></span>
                        <div className="bg-background py-3 px-2 uppercase text-xs text-gray-400 ">
                            Or
                        </div>
                    </div>
                    <div className=" flex justify-center w-full gap-4">
                        <Button className=' rounded-full size-12' variant={'outline'} size={'icon'}> <FcGoogle className='size-6' /> </Button>
                        <Button className=' rounded-full size-12' variant={'outline'} size={'icon'}> <FaFacebookF className=' fill-[#4267B2] size-5' /> </Button>
                    </div>
                </div>
                <div className=" flex flex-col w-full gap-3 items-center">
                    <Button className=' w-full rounded-full h-14'>Login</Button>
                    <div className="">
                        <span>Don't have an account? </span>
                        <Link href='#' className=' text-blue-500'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page