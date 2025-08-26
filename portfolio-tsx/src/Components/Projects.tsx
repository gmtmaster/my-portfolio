import MagicBento from '../React/MagicBento'

export default function Projects() {
    return (

        <>
            <section className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    My{" "}
                    <span className="bg-gradient-to-b from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                        Projects
                      </span>
                </h1>

                <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                    />
            </section>
    </>
    )
}

