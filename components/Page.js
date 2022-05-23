import DynamicComponent from "./DynamicComponent";
 
const Page = ({ blok, hover, setHover, hoverImage, setHoverImage }) => (
  <main>
    {blok.body
      ? blok.body.map((blok) => (
        <DynamicComponent 
          blok={blok} 
          hover={hover} 
          setHover={setHover} 
          key={blok._uid} 
          hoverImage={hoverImage}
          setHoverImage={setHoverImage}
          />
        ))
      : null}
  </main>
);
 
export default Page;