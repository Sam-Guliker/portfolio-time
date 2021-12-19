import { useState, useEffect } from 'react';

import useWindowSize from '../lib/resizer'

export default function MouseCursor() {
  const size = useWindowSize();
  const tabletSize = 728
  const [xPos, setX] = useState(0)
  const [yPos, setY] = useState(0)

  useEffect(() => {
    const update = (e) => {
        setX(e.pageX  || e.clientX)
        setY(e.pageY || e.clientY)
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
    <>
    {size.width > tabletSize && 
        <div className="mouse-cursor" style={{transform: `translate(calc(${xPos}px - 3px), calc(${yPos}px - 3px)`, position: 'absolute'}}>
        </div>
      }
    </>
  )
}
