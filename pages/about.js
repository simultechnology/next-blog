import Container from "@/components/container";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import Contact from "@/components/contact";
import {TwoColumn, TwoColumnMain, TwoColumnSidebar} from "@/components/two-column";
import Image from "next/legacy/image";
import eyecatch from "images/about.png"

export default function About() {
  return (
    <Container>

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-
            </p>
            <h2>h2 title aaaaaaa</h2>
            <p>
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-
            </p>
            <p>
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-
            </p>
            <h3>h3 title aaaaaaaa</h3>
            <p>
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd- <br />
              test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-test-abcd-
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}