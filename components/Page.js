import DynamicComponent from "./DynamicComponent";
 
const Page = ({ blok }) => (
  <main>
    {console.log(blok.body)}
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);
 
export default Page;