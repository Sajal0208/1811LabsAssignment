"use client"
import { useState } from "react"
import Logo from "./Logo"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

export const SubscribeButton = () => {
    const [email, setEmail] = useState("")

    const onSubscribe = () => {
        console.log("Subscribed with email", email)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="px-12 py-2 bg-pink-500 text-white rounded-md">
                    Subscribe
                </button>
            </DialogTrigger>
            <DialogContent className="p-0 m-0">
                <div className="flex flex-col items-center justify-center gap-y-6 bg-white p-10 rounded-xl">
                    <Logo />
                    <h1 className="text-3xl font-semibold">Join the Club!</h1>
                    <p className="text-center text-gray-500">Like these tools? you might want to checkout more awesome products from us made just for you</p>
                    <div className="border border-solid border-gray-100 rounded-lg p-2 gap-x-4">
                        <input className="focus:outline-none mr-4" />
                        <button className="px-4 py-2 bg-pink-500 text-white rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}