import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import { readFile } from 'fs/promises';
import toml from 'toml';

export default async function handler(req, res) {
  const tomlData = await readFile('./rss-feeds.toml');
  const feeds = toml.parse(tomlData.toString()).feeds;
  const promises = feeds.map((url) =>
    fetch(url)
      .then((response) => response.text())
      .then((xml) => parseStringPromise(xml))
      .then((json) => json.rss.channel.item.slice(0, 5))
  );
  const items = await Promise.all(promises);
  res.json(items.flat());
}
