import Head from "next/head"
 
// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'

import Nav from '../components/Nav'
import GithubItems from '../components/GithubItems'
 
export default function Home({ story, preview }) {
  story = useStoryblok(story, preview)
  return (
    <div className='container'>
      <Head>
        <title> Sam Guliker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <Nav />
      </header>
 
      <main>
        <GithubItems />
        <DynamicComponent blok={story.content} />
      </main>
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

// https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes  |
// https://github.com/storyblok/react-next-boilerplate/tree/main/components |