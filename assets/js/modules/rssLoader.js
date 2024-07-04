export default function () {
  var rssFeed;

  async function fetchRssFeed(rssFeedUrl) {
    var xml = rssFeed = await fetch(rssFeedUrl)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"));
    return Array.from(xml.querySelectorAll("item")).map(item => {
      return {
        "title": item.querySelector("title").textContent,
        "link": item.querySelector("link").textContent,
        "description": item.querySelector("description").textContent,
        "pubDate": item.querySelector("pubDate").textContent
      }
    });
  }

  return {
    fetchRssFeed
  };
}