export function Hero() {
  return (
    <Decoration>
      <h1>My Blog</h1>
      <p>statement</p>
    </Decoration>
  )
}

function Decoration(props) {
  return (
    <div style={{ color: 'red'}}>
      {props.children}
    </div>
  )
}
