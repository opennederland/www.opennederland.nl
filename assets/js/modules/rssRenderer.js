export default function (limit) {
  const container = document.querySelector("#rss-feed");
  const template = document.querySelector("#bericht-template");
  var allItems = [];
  var itemsPerPage = 5;

  function addItems(items) {
    allItems.push(...items);
    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    render();
  }

  function getPageWithCurrentDayItems() {
    var today = new Date();
    for (var i = 1; i < allItems.length; i++) {
      if (new Date(allItems[i].pubDate) < today) {
        return Math.ceil((i - 1) / itemsPerPage) + 1;
      }
    }
    return 1;
  }

  async function render(page) {
    // 1. Bounds
    const currentPage = page || getPageWithCurrentDayItems();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + (limit || itemsPerPage);

    // 2. Containers
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    // 3. Select items within bounds
    const itemsToRender = allItems.slice(start, end);

    itemsToRender.forEach(item => {
      const clone = template.content.cloneNode(true);

      // Date Formatting
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(item.pubDate).toLocaleDateString('nl-NL', dateOptions);
      
      clone.querySelector("[data-el=date]").textContent = formattedDate;
      
      // Links and Text
      const titleLink = clone.querySelector("[data-el=title-link]");
      titleLink.href = item.link;
      titleLink.textContent = item.title || "Zonder titel";

      clone.querySelector("[data-el=description]").textContent = item.description;

      const sourceLink = clone.querySelector("[data-el=source-link]");
      sourceLink.href = item.url;
      sourceLink.textContent = item.source;

      // 4. Handle Tags
      const tagTemplate = clone.querySelector("[data-el=tag]");
      if (tagTemplate && item.tags) {
        const tagParent = tagTemplate.parentNode;

        item.tags.forEach(tagText => {
          const newTag = tagTemplate.cloneNode(true);
          const slug = tagText.toLowerCase().replace(/\s+/g, '-');

          newTag.textContent = tagText;
          newTag.classList.add(slug);
          newTag.href = `/tags/${slug}/`;

          tagParent.appendChild(newTag);
        });

        // Remove the original placeholder tag
        tagTemplate.remove();
      }

      fragment.appendChild(clone);
    });

    // 5. DOM Update (Single Reflow)
    container.appendChild(fragment);

    if (!limit) {
      renderPaginationControls(container, allItems, currentPage);
    }
  }

  function renderPaginationControls(container, allItems, page) {
    const lastPage = Math.ceil(allItems.length / itemsPerPage)

    var html = '<ul class="pagination">';
    html += `<li class="page-item"><a class="page-link ${page > 1 ? "" : "disabled"}" href="#" data-page="1">&laquo;</a></li>`;
    html += `<li class="page-item"><a class="page-link ${page > 1 ? "" : "disabled"}" href="#" data-page="${page - 1}">&lsaquo;</a></li>`;
    html += `<li class="page-item"><a class="page-link ${page < lastPage ? "" : "disabled"}" href="#" data-page="${page + 1}">&rsaquo;</a></li>`;
    html += `<li class="page-item"><a class="page-link ${page < lastPage ? "" : "disabled"}" href="#" data-page="${lastPage}">&raquo;</a></li>`;
    html += '</ul>';

    container.innerHTML += html;
    container.innerHTML = html + container.innerHTML;

    var paginationItems = container.querySelectorAll(".page-link");
    paginationItems.forEach(item => {
      item.addEventListener("click", function (e) {
        render(parseInt(e.target.dataset.page));
      });
    });
  }

  return {
    addItems
  };
}