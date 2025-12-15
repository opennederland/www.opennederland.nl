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
    page = page || getPageWithCurrentDayItems();

    var fromItem = (page - 1) * itemsPerPage;
    var toItem = fromItem + (limit ? limit : itemsPerPage);

    container.innerHTML = '';
    for (var i = fromItem; i < toItem; i++) {
      var item = allItems[i];
      if (!item) break;
      var clone = template.content.cloneNode(true);
      clone.querySelector("[data-el=date]").textContent = new Date(item.pubDate).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
      clone.querySelector("[data-el=title-link]").href = item.link;
      clone.querySelector("[data-el=title-link]").textContent = item.title;
      clone.querySelector("[data-el=description]").textContent = item.description;
      clone.querySelector("[data-el=source-link]").href = item.url;
      clone.querySelector("[data-el=source-link]").textContent = item.source;
      for (const tag in item.tags) {
        clone.querySelector("[data-el=tag]").textContent = tag;
      container.appendChild(clone);
    }

    if (!limit) renderPaginationControls(container, allItems, page);
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