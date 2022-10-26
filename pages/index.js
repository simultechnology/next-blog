import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Posts from "./posts";
import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import {Footer} from "@/components/footer";
import Layout from "@/components/layout";

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

