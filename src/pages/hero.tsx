"use client";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="relative w-2/4 min-h-full">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-4 self-start">
                    <h1 className="text-4xl font-bold text-[#DAE2EF] backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 left-0 z-50">
                        Hans Vincent Aguilar
                    </h1>

                    <p className="text-xl font-medium text-[#DAE2EF]">Software Engineer</p>

                    <p className="text-secondary text-pretty max-w-xs">I love building simple to intermediate applications that benefits people.</p>

                    <nav>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-2 cursor-pointer">
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ x: 10 }}
                                >
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <motion.path
                                            d="M12 21l-12-18h24z"
                                            stroke="#DAE2EF"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.svg>
                                    <span>About</span>
                                </motion.div>
                            </li>

                            <li className="flex items-center gap-2 cursor-pointer">
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ x: 10 }} // Move the container 5 units to the right on hover
                                >
                                    <motion.svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <motion.path
                                            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
                                            stroke="#DAE2EF"
                                            strokeWidth="1"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.svg>
                                    <span>Experience</span>
                                </motion.div>
                            </li>

                            <li className="flex items-center gap-2 cursor-pointer">
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ x: 10 }} // Move the container 5 units to the right on hover
                                >
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        whileHover={{ rotate: 45 }}
                                    >
                                        <motion.path
                                            d="M 12,12 m -10,0 a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0"
                                            stroke="#DAE2EF"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.svg>
                                    <span>Contact</span>
                                </motion.div>

                            </li>

                            <li className="flex items-center gap-2" >
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ x: 10 }} // Move the container 5 units to the right on hover
                                >
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <motion.path
                                            d="M 5,5 L 5,19 L 19,19 L 19,5 L 5,5 Z"
                                            stroke="#DAE2EF"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.svg>
                                    <span>
                                        Projects
                                    </span>
                                </motion.div>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 self-start">
                        <AiOutlineGithub size={30} className="hover:text-[#DEE5EF] cursor-pointer text-secondary" />
                        <AiFillLinkedin size={30} className="hover:text-[#DEE5EF] cursor-pointer text-secondary" />
                        <AiFillInstagram size={30} className="hover:text-[#DEE5EF] cursor-pointer text-secondary" />
                        <AiFillFacebook size={30} className="hover:text-[#DEE5EF] cursor-pointer text-secondary" />
                    </div>
                </div>
            </div>


        </section>
    )

    // return (
    //     <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="w-full p-4">
    //         <nav className="flex items-center justify-between">
    //             <h1 className="text-xl font-medium">Hans</h1>
    //             <ul className="hidden md:flex items-center space-x-8">
    //                 {menuList.map(item => (
    //                     <li className="cursor-pointer" key={item}>
    //                         {item}
    //                     </li>
    //                 ))}
    //             </ul>
    //             <motion.div
    //                 className="md:hidden cursor-pointer"
    //                 onClick={() => setOpen(!open)}
    //                 initial={{ opacity: 1 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
    //             >
    //                 <motion.div
    //                     className="h-0.5 w-6 bg-white my-1" // Adjusted height to h-0.5
    //                     initial={{ rotate: 0, translateY: 0 }} // Added translateY initial value
    //                     animate={{ rotate: open ? 45 : 0, translateY: open ? 0 : 0 }} // Adjusted rotate and translateY
    //                     transition={{ type: "spring", stiffness: 260, damping: 20 }}
    //                 />
    //                 <motion.div
    //                     className="h-0.5 w-6 bg-white my-1" // Adjusted height to h-0.5
    //                     initial={{ opacity: 1 }}
    //                     animate={{ opacity: open ? 0 : 1 }}
    //                     transition={{ duration: 0.2 }}
    //                 />
    //                 <motion.div
    //                     className="h-0.5 w-6 bg-white my-1" // Adjusted height to h-0.5
    //                     initial={{ rotate: 0, translateY: 0 }} // Added translateY initial value
    //                     animate={{ rotate: open ? -45 : 0, translateY: open ? -10 : 0 }} // Adjusted rotate and translateY
    //                     transition={{ type: "spring", stiffness: 260, damping: 20 }}
    //                 />
    //             </motion.div>
    //             <AnimatePresence>
    //                 {open && (
    //                     <motion.ul
    //                         initial={{ y: -100, opacity: 0 }}
    //                         animate={{ y: 0, opacity: 1 }}
    //                         exit={{ y: -100, opacity: 0 }}
    //                         transition={{ type: "tween", duration: 0.5 }}
    //                         className="absolute top-16 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg md:hidden"
    //                     >
    //                         {menuList.map(item => (
    //                             <motion.li
    //                                 key={item}
    //                                 className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm"
    //                             >
    //                                 {item}
    //                             </motion.li>
    //                         ))}
    //                     </motion.ul>
    //                 )}
    //             </AnimatePresence>
    //         </nav>
    //     </motion.header >
    // );
}

