import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
 
export default function ({ blok, currentKey, setCurrentKey }) {
  return (
    <div className="section">
      <p>{blok.section}</p>
      <h2 className="heading-02">Projects</h2>
      {blok.columns.map((blok) =>
        (<DynamicComponent blok={blok} key={blok._uid} data-type='view more'/>)
      )}
    </div>
  )
}