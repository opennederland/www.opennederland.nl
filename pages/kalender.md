---
layout: default
title: "Kalender"
permalink: /kalender/
statement: "Een overzicht van alle vieringen en belangrijke dagen binnen het netwerk over het hele jaar."
---

<div class="content-body mb-xl">
<p>Gedurende het jaar zijn er verschillende momenten waarop de 'Open' bewegingen lokaal en wereldwijd samenkomen. Bekijk hieronder de belangrijkste evenementen per thema.</p>
</div>

{% assign pages_with_events = site.tags | where_exp: "item", "item.events != nil" | sort: "title" %}

{% for theme_page in pages_with_events %}
<div class="mb-xl">
  <h2 id="{{ theme_page.title | slugify }}" style="margin-bottom: 0.5em;">
    <a href="{{ theme_page.url | relative_url }}" style="text-decoration: none; color: inherit;">
      {{ theme_page.title }}
    </a>
  </h2>
  
  {% if theme_page.statement %}
  <p style="font-style: italic; margin-bottom: 1.5em;">{{ theme_page.statement }}</p>
  {% endif %}

  {% assign current_theme_tag = theme_page.tags[0] %}
  
  {% include events.html events=theme_page.events tag=current_theme_tag %}
</div>

<hr style="margin: 3em 0;" />
{% endfor %}

<div class="container-narrow container-center">
<h3 class="connection-title mb-md">Verken de thema's</h3>
{% include tags-list.html %}
</div>