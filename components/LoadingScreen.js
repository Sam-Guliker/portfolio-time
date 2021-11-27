import React, {useState,useEffect} from 'react';
import { TweenMax } from "gsap";

export default function LoadingScreen() {
    const text = React.createRef();
    const bar = React.createRef();
    const container = React.createRef();

    let i = 0
    let width = 10

    useEffect(() => {
        if (i == 0) {
            i = 1
            var identity = setInterval(scene, 12)
                
            function scene() {
                if(width >= 101) {
                    clearInterval(identity)
                    i=0
                } else if (width === 100) {
                    setTimeout(() => {
                        TweenMax.to(container.current, 0.3, {autoAlpha: '0'})
                    }, 400)
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
            <div className="heading-container">
                <h2 className="loading-heading" ref={text}>{width}%</h2>
            </div>
            <div className="loading-bar" ref={bar}></div>
        </div>
    )
}
