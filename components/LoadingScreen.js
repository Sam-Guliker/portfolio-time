import React, {useState,useEffect} from 'react';

export default function LoadingScreen() {

    const text = React.createRef();
    const bar = React.createRef();

    let i = 0
    let width = 10

    useEffect(() => {
        if (i == 0) {
            i = 1
            var identity = setInterval(scene, 13)
                
            function scene() {
                if(width>=100) {
                    clearInterval(identity)
                    i=0
                } else {
                    width++
                    console.log(bar)
                    bar.current.style.width = width + '%';
                    text.current.innerHTML = width + '%'
                }
            }
        }
    },[])

    return (
        <div className="loading-container">
            <div className="heading-container">
                <h2 className="loading-heading" ref={text}>{width}%</h2>
            </div>
            <div className="loading-bar" ref={bar}></div>
        </div>
    )
}
