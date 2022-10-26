import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Posts from "./posts";
import {Hero} from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero
        title="MyBlog"
        subtitle="site for output"
        imageOn
      />
      <Posts />
    </>
  )
}

