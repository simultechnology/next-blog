import {client} from "lib/api";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export default function Schedule() {
  return <h1>a title of an article</h1>
}

export async function getStaticProps() {
  console.log('process1')
  console.log('process2')
  setTimeout(() => console.log('process 2-1'), 1000)
  console.log('process3')

  const resPromise = client.get({
    endpoint: 'blogs'
  });
  console.log(resPromise)
  // resPromise.then((res) => console.log(res)).catch((err) => console.log(err))
  try {
    const res = await resPromise
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}