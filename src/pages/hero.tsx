"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuList = ["About", "Experiences", "Works", "Contact"];

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="w-full p-4">
            <nav className="flex items-center justify-between">
                <h1 className="text-xl font-medium">Hans</h1>
                <ul className="hidden md:flex items-center space-x-8">
                    {menuList.map(item => (
                        <li className="cursor-pointer" key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
                <motion.div
                    className="md:hidden cursor-pointer"
                    onClick={() => setOpen(!open)}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <motion.div
                        className="h-0.5 w-6 bg-white my-1" // Adjusted height to h-0.5
                        initial={{ rotate: 0, translateY: 0 }} // Added translateY initial value
                        animate={{ rotate: open ? 45 : 0, translateY: open ? 0 : 0 }} // Adjusted rotate and translateY
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    />
                    <motion.div
                        className="h-0.5 w-6 bg-white my-1" // Adjusted height to h-0.5
                        initial={{ opacity: 1 }}
                        animate={{ opacity: open ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div
                        className="h-0.5 w-6 bg-white my-1" // Adjusted height to h-0.5
                        initial={{ rotate: 0, translateY: 0 }} // Added translateY initial value
                        animate={{ rotate: open ? -45 : 0, translateY: open ? -10 : 0 }} // Adjusted rotate and translateY
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    />
                </motion.div>
                <AnimatePresence>
                    {open && (
                        <motion.ul
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ type: "tween", duration: 0.5 }}
                            className="absolute top-16 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg md:hidden"
                        >
                            {menuList.map(item => (
                                <motion.li
                                    key={item}
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header >
    );
}

