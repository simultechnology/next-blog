import styles from 'styles/hero.module.css'
import Image from "next/legacy/image";
import hero from 'images/hero.png';

export function Hero({ title, subtitle, imageOn = false }) {
  return (
    <Decoration>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={hero}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width:768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
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
