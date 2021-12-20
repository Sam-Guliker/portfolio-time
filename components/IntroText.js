import { TweenMax,Power3 } from "gsap";
import React, {useEffect} from 'react';

const introText = React.createRef();

export default function IntroText ({ blok }) {
  useEffect(() => { 
    TweenMax.set(introText.current, {autoAlpha: 0, top: '-10px'})
    TweenMax.to(introText.current, 0.3, {autoAlpha: 1, top: 0, delay: 2.7})
  })

  return (
      <div className="section" ref={introText}>
        <p>{blok.section}</p>
        <h2 className="heading-02">Introduction</h2>
        <h1 class="heading-01">{blok.introduction_text} <br/>{blok.label}
        <br/>
        {blok.from}
        </h1>
      </div>
    )
  }