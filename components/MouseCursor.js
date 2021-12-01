import { useState,useEffect } from 'react';

export default function MouseCursor() {    
    const [xPos, setX] = useState(0)
    const [yPos, setY] = useState(0)

    const minimumScreenSize = 768

    useEffect(() => {
        const update = (e) => {
            setX(e.x)
            setY(e.y)
          }
          window.addEventListener('mousemove', update)
          window.addEventListener('touchmove', update)
          
          return () => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
          }
        },
        [setX, setY]
    )

    return (
        <div className="mouse-cursor" style={{transform: `translate(calc(${xPos}px - 3px), calc(${yPos}px - 3px)`, position: 'absolute'}}>
        </div>
    )
}
