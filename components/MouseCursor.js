import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";

import useWindowSize from '../lib/resizer'

export default function MouseCursor({hover, hoverImage}) {
  const size = useWindowSize();
  const tabletSize = 728
  const [xPos, setX] = useState(0)
  const [yPos, setY] = useState(0)
  const mouse = useRef(null)
  const tl = gsap.timeline()

  useEffect(() => {
    const imageWrapper = document.createElement("div")
    const image = document.createElement("img")

    if(hover) {

      if(!mouse.current.hasChildNodes()) {
        image.id = 'hoverImage'

        tl
          .set(mouse.current, {x: '-50%', y: '-50%', borderRadius: '20px'})
          .set(image, { attr: {src: `${hoverImage}`}})
          .from(mouse.current ,{scale:0.3})
          .to(mouse.current, {scale:1,  duration: 0.3,  ease: "expo.out"})


        mouse.current.style.width = "960px"
        mouse.current.style.height = "auto"

        // image.src = `${hoverImage}`

        mouse.current.appendChild(imageWrapper)
        imageWrapper.appendChild(image)
        
        imageWrapper.classList.add("placeholder")
        image.classList.add("big-image")

      } else {
        const updateImage = document.getElementById('hoverImage')
        if(updateImage){
          updateImage.src=hoverImage
        }
      }
    }

    if(hover === false & mouse?.current?.hasChildNodes()) {
      const imageContainer = document.getElementsByClassName('placeholder')[0]
      console.log(imageContainer)
      imageContainer.remove()

      mouse.current.style.width = '9px';
      mouse.current.style.height = '9px'
    }

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
