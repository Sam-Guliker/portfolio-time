import React, {useState, useEffect} from 'react';
import { TweenMax, Power3 } from "gsap";

export default function LoadingScreen() {
    const text = React.createRef();
    const bar = React.createRef();
    const container = React.createRef();
    const overlay = React.createRef();

    let i = 0
    let width = 10

    useEffect(() => {
        if (i == 0) {
            i = 1
            var identity = setInterval(scene, 12)
            TweenMax.set(overlay.current, {autoAlpha: 0})
                
            function scene() {
                if(width >= 101) {
                    clearInterval(identity)
                    i=0
                } else if (width === 100) {
                    TweenMax.to(text.current, 0.3, {opacity: 0, delay: 0.3})
                    TweenMax.to(bar.current, 0.3, {opacity: 0, delay: 0.3})
                    TweenMax.to(overlay.current, 1.2, { 
                        autoAlpha: 1,
                        top: '-100%', 
                        ease: Power3.easeOut,
                        delay: 0.9, 
                    })

                    setTimeout(() => {
                        TweenMax.to(container.current, 3, {autoAlpha: 0})
                        }, 3000)
                    clearInterval(identity)
                    i=0
                }
                else {
                    width++
                    bar.current.style.width = width + '%';
                    text.current.innerHTML = width + '%'
                }
            }
        }
    },[])

    return (
        <div className="loading-container" ref={container}>
            <div className="overlay-container" ref={overlay}></div>
            <div className="heading-container">
                <h2 className="loading-heading" ref={text}>{width}%</h2>
            </div>
            <div className="loading-bar" ref={bar}></div>
        </div>
    )
}
