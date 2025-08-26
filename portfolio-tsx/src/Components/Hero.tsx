import React from 'react';
import DarkVeil from '../React/DarkVeil';

function Hero() {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
            {/* DarkVeil background */}
            <div className="absolute inset-0 z-0">
                <DarkVeil />
            </div>

            {/* Hero content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    <span className="text-6xl text-white font-['Luckiest_Guy']">Hello, I'm</span>
                    <br/>
                    Adam <span
                    className="bg-gradient-to-b from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">Lekrinszki
          </span>
                </h1>

                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-200 font-sans">
                    A passionate <span className="text-indigo-400">Full-Stack Developer</span>{' '}
                    building modern web apps with React, Next.js, and Supabase.
                    Always learning, always creating.
                </p>
                <div className="flex justify-center mt-6 space-x-4">
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="buttonpro"
                    ><span>See More</span></button>
                </div>
            </div>

        </section>
);
}

export default Hero;
