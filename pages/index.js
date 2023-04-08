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
        src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
      <script
        src="../pages/fetch-rss.js"
        type="module"></script>
      <script
        src="../render-feeds.js"
        type="module"></script>
    </div>
  )
}