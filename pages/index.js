import Container from "@/components/container";
import React from 'react'
import Posts from "@/components/posts";
import Hero from "@/components/hero";
import Meta from "@/components/meta";
import {getAllPosts} from "../lib/api";
import {eyecatchLocal} from "../lib/constants";
import {getPlaiceholder} from "plaiceholder";
import Pagination from "@/components/pagination";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero
        title="Blog"
        subtitle="site for output"
        imageOn
      />
      <Posts posts={posts}/>
      <Pagination nextUrl={"/blog"} nextText={"More Posts"} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    console.log(post)
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
