import Link from "next/link"

export const Header = () => {
  return (
    <header style={{ padding: 0, margin: 0, backgroundColor: "lightgrey" }}>
      <h3 style={{ display: "inline" }}>
        <Link href="/">
          <a>ButWillItScale</a>
        </Link>
      </h3>
      <span style={{ padding: "0 20px" }}>|</span>
      <Link href="/posts/[slug]" as="/posts/lets-party">
        <a>Let's Party</a>
      </Link>
      <span style={{ padding: "0 20px" }}>|</span>
      <Link href="/posts/[slug]" as="/posts/some-food-for-thought">
        <a>Some Food For Thought</a>
      </Link>
    </header>
  )
}
