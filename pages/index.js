import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { Grid } from '@chakra-ui/react'

import { Container } from '@chakra-ui/react'
export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  console.log(allPosts);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blogs by Parmod</title>
        </Head>
          <Intro />
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
          
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
