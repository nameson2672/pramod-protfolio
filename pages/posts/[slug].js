import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import HeroPost from "../../components/hero-post";
import PostHeader from "../../components/post-header";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Form from "../../components/form";
import { chakra, Grid, Container } from "@chakra-ui/react";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (post === undefined) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container centerContent my={"16"} maxW={["sm", "md", "8xl"]}>
      
        <Head>
          <title>{post.title}</title>
          {/* <meta property="og:image" content={post.ogImage.url} /> */}
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.body} />
      

      <Comments comments={post.comments} />
      <Form _id={post._id} />

      <SectionSeparator />
      <chakra.span fontSize={'2xl'} display={{ base: "block", xl: "inline" }}>
                  More Posts:
                </chakra.span>
      <Grid centerContent templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)' ]} gap={6} maxW={["300", "400", "640px", "1040px"]} mx={"auto"}>
          {morePosts.map((currentPost)=>(
            <HeroPost
            title={currentPost.title}
            coverImage={currentPost.coverImage}
            date={currentPost.date}
            author={currentPost.author}
            slug={currentPost.slug}
            excerpt={currentPost.excerpt}
            categories={currentPost.categories}
            readTime={currentPost.estimatedReadingTime}
          />
          ))
          }
          </Grid>
    </Container>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
