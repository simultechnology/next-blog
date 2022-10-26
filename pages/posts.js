function EachPost(props) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export default function Posts() {
  return (
    <section>
      <h2>recommended articles</h2>
      <EachPost title="schedule" url="/blog/schedule" />
      <EachPost title="music" url="/blog/music" />
    </section>
  )
}