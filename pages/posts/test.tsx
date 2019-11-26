import Link from "next/link"

export default () => {
  return (
    <article>
      <h1>Test</h1>
      <p>
        <Link href="/posts/[slug]" as="/posts/lets-party">
          Let's Party
        </Link>
      </p>
      <p>
        <Link href="/posts/[slug]" as="/posts/some-food-for-thought">
          Some Food For Thought
        </Link>
      </p>
    </article>
  )
}
