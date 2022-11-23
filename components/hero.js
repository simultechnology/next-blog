import styles from 'styles/hero.module.css'

export function Hero({ title, subtitle, imageOn = false }) {
  return (
    <Decoration>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure>[image]</figure>}
    </Decoration>
  )
}

function Decoration(props) {
  return (
    <div className={styles.flexContainer}>
      {props.children}
    </div>
  )
}
