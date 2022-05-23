import { useState, useEffect, useRef } from 'react';

import useWindowSize from '../lib/resizer'

export default function MouseCursor({hover, hoverImage}) {
  const size = useWindowSize();
  const tabletSize = 728
  const [xPos, setX] = useState(0)
  const [yPos, setY] = useState(0)
  const mouse = useRef(null)

  console.log(hover)

  useEffect(() => {
    if(hover) {

      // const heightElement = document.getElementsByClassName('')

      mouse.current.style.width = "960px"
      mouse.current.style.height = "auto"

      mouse.current.style.left = `${xPos} - 480px`
      mouse.current.style.top = `${yPos} - 240px`

      
      if(!mouse.current.hasChildNodes()) {
        const imageWrapper = document.createElement("div")
        const image = document.createElement("img")
        image.id = 'hoverImage'
        image.src = `${hoverImage}`

        mouse.current.appendChild(imageWrapper)
        imageWrapper.appendChild(image)
        
        imageWrapper.classList.add("placeholder")
        image.classList.add("big-image")

      } else {
        const updateImage = document.getElementById('hoverImage')
        if(updateImage){

          updateImage.src=hoverImage
        }
        console.log(updateImage)

      }
    } else {
      
    }

    // if(!hover) {
    //   if(mouse.current.hasChildNodes()){
    //     mouse.current.removeChild()
    //   }
    // }

    // if(!hover) {
    //   mouse.current.style.width = "8px"
    //   mouse.current.style.height = "8px"
    // }

    const updateCursor = (e) => {
        setX(e.pageX  || e.clientX)
        setY(e.pageY || e.clientY)
      }
      window.addEventListener('mousemove', updateCursor)
      window.addEventListener('touchmove', updateCursor)
      
      return () => {
        window.removeEventListener('mousemove', updateCursor)
        window.removeEventListener('touchmove', updateCursor)
      }
    },[hover, hoverImage]
  )

  return (
    <>
      {size.width > tabletSize && 
          <div ref={mouse} className="mouse-cursor" style={{left: `calc(${xPos}px - 4px)`, top: `calc(${yPos}px - 4px)`, position: 'absolute'}}>
          </div>
      }
    </>
  )
}
