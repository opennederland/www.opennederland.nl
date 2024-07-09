export default function () {
  async function fetchRssFeed(rssFeedUrl) {
    var responseText = await fetch(rssFeedUrl).then(response => response.text());
    if (responseText.includes("xml version")) {
      var xml = new window.DOMParser().parseFromString(responseText, "text/xml");
      return Array.from(xml.querySelectorAll("item")).map(item => {
        return {
          "title": item.querySelector("title").textContent,
          "link": item.querySelector("link").textContent,
          "description": item.querySelector("description").textContent,
          "pubDate": item.querySelector("pubDate").textContent
        }
      });
    } else {
      return JSON.parse(responseText).items;
    }
  }

  return {
    fetchRssFeed
  };
}