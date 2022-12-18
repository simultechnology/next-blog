import Container from "@/components/container";
import React from 'react'
import Posts from "./posts";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Container>
      <Hero
        title="Blog"
        subtitle="site for output"
        imageOn
      />
      <Posts />
    </Container>
  )
}

