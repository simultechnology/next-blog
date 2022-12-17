import Image from "next/image";

export default function EyeCatch() {
  return (
    <figure>
      <Image
        src="/rocket.jpg"
        alt="空飛ぶロケット"
        layout="responsive"
        width="1980"
        height="1150"
      />
    </figure>
  )
}