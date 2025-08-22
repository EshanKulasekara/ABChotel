import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className={`Header z-50 fixed inset-x-0 w-full flex justify-between items-center p-10 transition-colors duration-500 ${
                scrolled ? "bg-white text-gray-800" : "bg-transparent text-white"
            }`}
            animate={{ backgroundColor: scrolled ? "#fff" : "transparent", color: scrolled ? "#1f2937" : "#fff" }}
            transition={{ duration: 0.4 }}
        >
            <div className="logo">
                <h1 className="text-2xl font-bold">ABC Hotel</h1>
            </div>
            <div className="Links-and-login flex justify-between items-center space-x-8">
                <div className="Links space-x-4">
                    <Link href="#" className="hover:text-purple-500">Home</Link>
                    <Link href="#" className="hover:text-purple-500">About</Link>
                    <Link href="#" className="hover:text-purple-500">Rooms</Link>
                    <Link href="#" className="hover:text-purple-500">Contact</Link>
                </div>
                <span className="h-6 w-px bg-gray-400 mx-2 inline-block"></span>
                <SignedOut>
                    <div className="Login space-x-4">
                        <Link href="/sign-in" className="px-4 py-2 text-gray-800 rounded bg-purple-300 hover:bg-purple-400 duration-500">Login</Link>
                        <Link href="/sign-up" className="px-4 py-2 rounded bg-gray-700 hover:bg-white hover:text-gray-800 duration-500">Register</Link>
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </motion.div>
    );
}