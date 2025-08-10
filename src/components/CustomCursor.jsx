import { useRef, useEffect } from "react";
import gsap from "gsap";

function CustomCursor(props) {
    //refs for cursor elements
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    //hide cursore on mobile
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches

    if (isMobile) {
        return null
    }

    useEffect(() => {
        //Get curosr elements
        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        //initial position off-screen
        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        //variables for cursor position
        const xTo = gsap.quickTo(cursor, "x", {duration: 0.2, ease: "power3.out"})
        const yTo = gsap.quickTo(cursor, "y", {duration: 0.2, ease: "power3.out"})

        const xToBorder = gsap.quickTo(cursorBorder, "x", {duration: 0.5, ease: "power.out"})
        const yToBorder = gsap.quickTo(cursorBorder, "y", {duration: 0.5, ease: "power3.out"})

        //Mouse mover handler
        const handleMouseMove = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xToBorder(e.clientX)
            yToBorder(e.clientY)
        }

        //add mouse move listeners
        window.addEventListener("mousemove", handleMouseMove)

        //add click animation

        document.addEventListener("mousedown", () => {
            gsap.to([cursor, cursorBorder], {
                scale: 0.6,
                duration: 0.2,
            })
        })
        document.addEventListener("mouseup", () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.2,
            })
        })

    }, []);


    return (
       <>
           {/*main cursor dot*/}
           <dev
            ref={cursorRef}
             className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
             style={{
                 left: "0px",
                 top: "0px",
                 pointerEvents: "none",
             }}
           />
           <div
               ref={cursorBorderRef}
               className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
               style={{
                   left: "0px",
                   top: "0px",
                   pointerEvents: "none",
               }}
           />

       </>
    );
}

export default CustomCursor;