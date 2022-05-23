import { TweenMax,Power3 } from "gsap";

export default function IntroText ({ blok }) {
  return (
    <div className="section">
      <p>{blok.section}</p>
        <h2 className="heading-02">Introduction</h2>
        <h1 className="heading-01">{blok.introduction_text} <br/>{blok.label}
      <br/>
      {blok.from}
      </h1>
    </div>
  )
}