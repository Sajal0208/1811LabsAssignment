"use client"
import { useState } from "react"
import Logo from "./Logo"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { toast } from "sonner";
import axios from "axios";
import { DialogClose } from "@radix-ui/react-dialog";

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const SubscribeButton = () => {
    const [email, setEmail] = useState("")

    const onSubscribe = async () => {
        console.log("Subscribed with email", email)
        if (!email) {
            toast("Please enter an email")
            return;
        }

        if (!validateEmail(email)) {
            toast("Invalid email")
            return;
        }

        try {
            const res = await axios.post("/api/email", JSON.stringify({ email }))

            if (res.status === 201) return toast("Subscribed successfully");

            if (res.status === 200) return toast("You have already subscribed with this email")
        } catch (e: any) {
            console.error(e)
            toast("Failed to subscribe")
        } finally {
            setEmail("")
        }
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
                        <input value={email} onChange={(e: any) => {
                            setEmail(e.target.value)
                        }} className="focus:outline-none mr-4" />
                        <DialogClose asChild>
                            <button onClick={onSubscribe} className="px-4 py-2 bg-pink-500 text-white rounded-md">
                                Subscribe
                            </button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}