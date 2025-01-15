export default function () {
  function shorten(text, maxLength = 360) {
    if (text.length > maxLength) {
      text = text.substr(0, maxLength);
      text = text.substr(0, Math.min(text.length, text.lastIndexOf(" ")));
      text += '...';
    }
    return text;
  }

  async function fetchRssFeed(rssFeedUrl) {
    var responseText = await fetch(rssFeedUrl).then(response => response.text());
    if (responseText.includes("xml version") || responseText.includes("rss version")) {
      var xml = new window.DOMParser().parseFromString(responseText, "text/xml");
      return Array.from(xml.querySelectorAll("item")).map(item => {
        return {
          "title": item.querySelector("title").textContent,
          "link": item.querySelector("link").textContent,
          "description": shorten(item.querySelector("description").textContent.replace(/<[^>]*>?/gm, '')),
          "pubDate": item.querySelector("pubDate").textContent
        }
      });
    } else {
      return JSON.parse(responseText).items.map(item => {
        return {
          "title": item.title,
          "link": item.url,
          "description": shorten(item.content_html.replace(/<[^>]*>?/gm, '')),
          "pubDate": new Date(item.date_published).toUTCString()
        }
      });
    }
  }

  return {
    fetchRssFeed
  };
}