import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import Posts from "../pages/posts";
import {Footer} from "@/components/footer";
import React from "react";

export default function Layout({children}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}