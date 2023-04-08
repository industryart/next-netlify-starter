import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My RSS Feeds</title>
      </Head>
      <h1>My RSS Feeds</h1>
      <ul id="feed-list"></ul>
      <script
        src="/fetch-rss.js"
        type="module"></script>
      <script
        src="/render-feeds.js"
        type="module"></script>
    </div>
  )
}