import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
 
export default function ({ blok, currentKey, setCurrentKey }) {
  return (
    <div className="grid list-items">
      {blok.columns.map((blok) =>
        (<DynamicComponent blok={blok} key={blok._uid}/>)
      )}
    </div>
  )
}