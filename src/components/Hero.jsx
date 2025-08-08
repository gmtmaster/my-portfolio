import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import { SplitText } from "gsap/all";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useMediaQuery} from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const videoRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useGSAP(()=> {

        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('.right-leaf', {y: 200}, 0)
            .to('.left-leaf', {y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom 10%';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                markers: false,
            }
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        };

        const hero2Split = new SplitText('.blossom', { type: 'chars' });

// Timeline for scroll-scrubbed stagger animation
        gsap.timeline({
            scrollTrigger: {
                trigger: '#blossom-reveal',  // parent section
                start: 'top bottom',
                end: 'top top',
                scrub: true,                 // ← key to scrub with scroll
                pin: true,
                markers: false
            }
        })
            .from(hero2Split.chars, {
                yPercent: 100,
                opacity: 0,
                ease: 'power2.out',
                stagger: {
                    each: 0.1,
                    ease: 'none'
                }
            });



    }, []);

    return (
        <>

        <section>
        <div>
            <h1 className="hero-text uppercase text-[20vh]">
                Hi,
                I'm Adam
            </h1>
        </div>
        </section>
            <div className="video absolute inset-0 ">
                <video  ref={videoRef}
                        src="/videos/output.mp4"
                        muted
                        playsInline
                        preload="auto"
                />
            </div>
        </>
    );
}

export default Hero;