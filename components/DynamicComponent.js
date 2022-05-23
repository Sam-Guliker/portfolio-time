import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import Grid from './Grid'
import Feature from './Feature'
import Page from './Page'
import ExternalLink from './ExternalLink'
import introText from './IntroText' 
import Footer from './Footer' 


// resolve Storyblok components to Next.js components
const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'page': Page,
  'ExternalLink': ExternalLink,
  'introText': introText,
  'footer': Footer,
}
 
const DynamicComponent = ({blok, hover, setHover, hoverImage, setHoverImage}) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return (<SbEditable content={blok} hover={hover} setHover={setHover} hoverImage={hoverImage} setHoverImage={setHoverImage}><Component hover={hover} setHover={setHover} blok={blok} hoverImage={hoverImage} setHoverImage={setHoverImage} /></SbEditable>)
  }
  
  // fallback if the component doesn't exist
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent