import { motion, AnimatePresence } from "framer-motion";
import {FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX} from "react-icons/fi";
import {useState} from "react";

function Header() {
    //toggle menu open/close
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    //contact from
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    return (
        <header className="absolute w-full z-50 transition-all duration-300">

            <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 h-16 md:h-20">

                {/*Logo section*/}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2
                }}
                    className="flex items-center">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                        A
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent ">
                        AdamLekrinszki
                    </span>
                </motion.div>

                {/*Desktop Navigation*/}
                <nav className="lg:flex hidden space-x-8">
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (

                        <motion.a href="#"
                           key={item}
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                      type: "spring",
                                      stiffness: 100,
                                      damping: 25,
                                      delay: 0.7 + (index * 0.2),
                                  }}
                           className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group">
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                </nav>

                {/*Social icons - Desktop*/}
                <div className="md:flex hidden items-center space-x-4">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3, duration: 0.8
                        }}
                        href="#"
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3, duration: 0.8
                        }}
                        href="#"
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                        <FiTwitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3, duration: 0.8
                        }}
                        href="#"
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>
                    {/*Hire me*/}

                    <motion.button
                        onClick={openContactForm}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6, duration: 0.8, type: "spring", stiffness: 100, damping: 50
                        }}
                        className="relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                    >
                      <span
                          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                      >
                      </span>
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                        >
                        Hire Me
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                          ></path>
                        </svg>
                      </span>
                    </motion.button>

                </div>

                {/*Mobile menu*/}
                <div className="md:hidden flex items-center">
                    <motion.button
                        whileTap={{scale: 0.7}}
                        className="text-gray-300"
                        onClick={toggleMenu}>

                        { isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/*Mobile menu*/}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                transition={{
                    duration: 0.5
                }}

                className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5">

                <nav className="flex flex-col space-y-3">
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
                        <a href="#"
                           key={item}>
                            {item}
                            </a>
                    ))}

                </nav>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-5">
                        <a href="#">
                            <FiGithub className="w-5 h-5 text-gray-300"/>
                        </a>
                        <a href="#">
                            <FiTwitter className="w-5 h-5 text-gray-300"/>
                        </a>
                        <a href="#">
                            <FiLinkedin className="w-5 h-5 text-gray-300"/>
                        </a>
                    </div>
                    <button
                        onClick={() => {
                            toggleMenu()
                            openContactForm()
                    }}
                        className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">
                        Contact Me
                    </button>
                </div>
            </motion.div>

            {/*Contact Form*/}
            <AnimatePresence>
            {contactFormOpen &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5
                    }}
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    >

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            duration: 0.8
                        }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl w-full max-w-md p-6">
                        <div className="flex items-center justify-between mb-4 ">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                Get In Touch
                            </h1>
                            <button onClick={closeContactForm}>
                                <FiX className="w-6 h-6 text-gray-300 font-extrabold" />
                            </button>
                        </div>

                        {/*Input form*/}
                        <form action="" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    id="message"
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                            </div>

                            <div className="flex justify-center items-center">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={openContactForm}

                                    className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                      <span
                                          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                      >
                                      </span>
                                     <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                                        Send Message
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 448 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                              d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                          ></path>
                                        </svg>
                                      </span>
                                </motion.button>
                            </div>

                        </form>
                    </motion.div>
                </motion.div>
            }
            </AnimatePresence>
        </header>
    );
}

export default Header;