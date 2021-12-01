import { useEffect, useState } from 'react';

import Head from "next/head"
 
// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'

// Componenets
import LoadingScreen from "../components/LoadingScreen"
import VideoContainer from '../components/VideoContainer'
import MouseCursor from '../components/MouseCursor';

/*

  1. Use ref on a main container to get all the tags items/tags

  2. Create a function that loops through all the strings and keeps changing them for a second.

  3. Only use the effect on load for now.

  4. Optional* use the function on hover of elements.

*/

export default function Home({ story, preview }) {
  const [currentKey, setCurrentKey] = useState('hi')
  const allLinkTags = document.getElementsByTagName('a')
  const randomLetters = '*+-/@_$[%£!XO1&>abcdefghijklmnop'

  // reset original text

  const originalTextFunction = (allLinkTags) => {

    
  }

  const letterTransformFunction = (element, ) => {
    const string = element.textContent

  }

  // manipulate text


  useEffect(() => {
    for (let i = 0; i < allLinkTags.length; i++) {
      const element = allLinkTags[i];
      
      if(element.textContent != '') {
        letterTransformFunction(element)
      }
      
    }
  });

  story = useStoryblok(story, preview)
  return (
    <>
      <Head>
        <title> Sam Guliker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MouseCursor />
      <LoadingScreen />
      <div className='container'>
        <DynamicComponent setCurrentKey={setCurrentKey} currentKey={currentKey} blok={story.content} />
        <VideoContainer />
      </div>
    </>
  )
}
 
export async function getStaticProps(context) {
  let slug = "home"
  let params = {
    version: "draft", // or 'draft'
  }
 
  if (context.preview) {
    params.version = "draft"
    params.cv = Date.now()
  }
 
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)
 
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 3600, // revalidate every hour
  }
}