import { fetchFeeds } from 'fetch-feeds';

export async function getStaticProps() {
  const feeds = await fetchFeeds('../netlify.toml');

  return {
    props: {
      feeds,
    },
  };
}

function HomePage({ feeds }) {
  return (
    <div>
      <h1>My RSS Feeds</h1>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id}>
            <a href={feed.link}>{feed.title}</a>
            <p>{feed.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
