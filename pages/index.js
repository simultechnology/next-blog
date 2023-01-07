import Container from "@/components/container";
import React from 'react'
import Posts from "./posts";
import Hero from "@/components/hero";
import Meta from "@/components/meta";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero
        title="Blog"
        subtitle="site for output"
        imageOn
      />
      <Posts />
    </Container>
  )
}

