import $ from 'jquery';

$(document).ready(() => {
  $.getJSON('/feeds.json', (data) => {
    const feedList = $('#feed-list');

    data.feeds.forEach((feed) => {
      const feedTitle = $('<h2>').text(feed.title);
      const feedItems = $('<ul>');

      feed.items.forEach((item) => {
        const itemTitle = $('<a>')
          .attr('href', item.link)
          .attr('target', '_blank')
          .text(item.title);
        const itemDate = $('<span>')
          .addClass('date')
          .text(` (${item.pubDate})`);
        const itemDescription = $('<p>').text(item.description);

        const feedItem = $('<li>').append(itemTitle, itemDate, itemDescription);
        feedItems.append(feedItem);
      });

      const feedContainer = $('<div>').addClass('feed-container').append(feedTitle, feedItems);
      feedList.append(feedContainer);
    });
  });
});
