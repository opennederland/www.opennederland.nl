export default function () {
  async function fetchRssFeed(rssFeedUrl) {
    var responseText = await fetch(rssFeedUrl).then(response => response.text());
    if (responseText.includes("xml version")) {
      var xml = new window.DOMParser().parseFromString(responseText, "text/xml");
      return Array.from(xml.querySelectorAll("item")).map(item => {
        return {
          "title": item.querySelector("title").textContent,
          "link": item.querySelector("link").textContent,
          "description": item.querySelector("description").textContent.replace(/<[^>]*>?/gm, '').substring(0, 400).split(' ').slice(0, -1).join(' ') + '...',
          "pubDate": item.querySelector("pubDate").textContent
        }
      });
    } else {
      return JSON.parse(responseText).items.map(item => {
        return {
          "title": item.title,
          "link": item.url,
          "description": item.content_html.replace(/<[^>]*>?/gm, '').substring(0, 400).split(' ').slice(0, -1).join(' ') + '...',
          "pubDate": new Date(item.date_published).toUTCString()
        }
      });
    }
  }

  return {
    fetchRssFeed
  };
}