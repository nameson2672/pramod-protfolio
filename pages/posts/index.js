import HeroPost from '../../components/hero-post'
import { Grid } from '@chakra-ui/react'
import { getAllPostsForHome } from '../../lib/api'

function index({ allPosts, preview }) {
  return (
    <>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)' ]} gap={6} maxW={["300", "400", "640px", "1040px"]} mx={"auto"}>
          {allPosts.map((currentPost)=>(
            <HeroPost
            title={currentPost.title}
            coverImage={currentPost.coverImage}
            date={currentPost.date}
            author={currentPost.author}
            slug={currentPost.slug}
            excerpt={currentPost.excerpt}
            categories={currentPost.categories}
          />
          ))
          }
          </Grid>
    </>
  )
}

export default index;

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { allPosts, preview },
      revalidate: 1
    }
  }