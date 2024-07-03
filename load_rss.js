document.addEventListener('DOMContentLoaded', function () {
    const rssFeedUrl = document.documentElement.dataset.rssFeed; // Get URL from data attribute

    fetch(rssFeedUrl)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("item");
        const rssFeedContainer = document.getElementById("rss-feed"); // Container element

        items.forEach(item => {
          const title = item.querySelector("title").textContent;
          const link = item.querySelector("link").textContent;

          // Create and append list items to the container:
          const listItem = document.createElement("li");
          const linkElement = document.createElement("a");
          linkElement.href = link;
          linkElement.textContent = title;
          listItem.appendChild(linkElement);
          rssFeedContainer.appendChild(listItem);
        });
      })
      .catch(error => console.error("Error fetching RSS feed:", error));
  });