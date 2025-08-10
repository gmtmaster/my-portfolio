import {motion} from "framer-motion";
import Spline from "@splinetool/react-spline";

function HeroSection() {
    return (
        <section className="h-screen bg-gradient-to-b from-purple-800 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

            {/* Left section*/}
            <div className="z-40 xl:mb-0 mb-[20%]">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.5,
                        duration: 1.5
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
                    Building Fast <br/> Reliable Results
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5
                    }}
                    className="text-xl md:text-1xl lg:text-2xl font-medium text-purple-200 max-w-2xl">
                    I'm a full stack developer based in Europe. I love building things that live on the internet, whether that be websites, applications, or anything in between. I deliver robust, production-ready websites and applications with speed and precision.
                </motion.p>
            </div>

            {/*Right section*/ }
            <Spline
                className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
                scene="https://prod.spline.design/BBKU7nr16no-Ohih/scene.splinecode" />
        </section>
    );
}

export default HeroSection;