import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
 
export default function ({ blok, hover, setHover, setHoverImage}) {
  return (
    <div className="section">
      <p>{blok.section}</p>
      <h2 className="heading-02">My work</h2>
      {blok.columns.map((blok) =>
        (<DynamicComponent blok={blok} key={blok._uid} hover={hover} setHover={setHover} setHoverImage={setHoverImage} data-type='view more'/>)
      )}
    </div>
  )
}