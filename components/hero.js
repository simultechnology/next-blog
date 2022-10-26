export function Hero({ title, subtitle, imageOn = false }) {
  return (
    <Decoration>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[image]</figure>}
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
