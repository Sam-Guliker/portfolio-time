
import Meta from "../components/Meta"

import Storyblok from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'

export default function Home(props) {
  const story = props.story

  return (
    <>
      <Meta />

      <header>
        <h1>
          { story ? story.name : 'My Site' }
        </h1>
      </header>

      <DynamicComponent blok={story.content} />
    </>
  )
}

export async function getStaticProps(context) {
  // the slug of the story
  let slug = "home"
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  }
 
  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft"
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }
 
  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)
 
  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10, 
  }
}

// https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes
// https://github.com/storyblok/react-next-boilerplate/tree/main/components