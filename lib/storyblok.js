import StoryblokClient from 'storyblok-js-client'
 
const Storyblok = new StoryblokClient({
    accessToken: '9vdragn7pNcXvjrVNZQ5vwtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})
 
export default Storyblok