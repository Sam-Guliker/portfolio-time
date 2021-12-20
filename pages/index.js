import React, { useEffect, useState } from 'react';
import { TweenMax, Power3 } from "gsap";
import Head from "next/head"
 
// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'

// Componenets
import LoadingScreen from "../components/LoadingScreen"
import VideoContainer from '../components/VideoContainer'
import MouseCursor from '../components/MouseCursor';

export default function Home({ story, preview }) {
  const [currentKey, setCurrentKey] = useState('')
  story = useStoryblok(story, preview)
  const container = React.createRef();

  useEffect(() => { 
    TweenMax.set(container.current, {overflow: 'hidden', height: '100vh'})
    TweenMax.set(container.current, {overflow: 'initial', height: 'initial', delay: 2.6})
  })

  return (
    <div className='app' ref={container}>
      <Head>
        <title> Sam Guliker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MouseCursor />
      <LoadingScreen />
      <div className='container'>
        <DynamicComponent setCurrentKey={setCurrentKey} currentKey={currentKey} blok={story.content} />
      </div>
      <VideoContainer />
    </div>
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