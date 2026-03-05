---
layout: default
title: "Kalender"
permalink: /kalender/
statement: "Een overzicht van alle vieringen en belangrijke dagen binnen het netwerk over het hele jaar."
menu_title: Kalender
order: 6
---

<h2>Terugkerende evenementen</h2>
<div class="content-body mb-xl">
<p>Gedurende het jaar zijn er verschillende terugkerende momenten waarop de 'Open' bewegingen lokaal en wereldwijd samenkomen. Hieronder zijn de belangrijkste evenementen per thema. Ontbreekt er een? Neem contact op.</p>
</div>

{% assign pages_with_events = site.tags | where_exp: "item", "item.events != nil" | sort: "title" %}

<div class="initiatives-grid mb-xl">

{% for theme_page in pages_with_events %}
  {% assign current_theme_tag = theme_page.tags[0] %}
  
  {% include events.html events=theme_page.events tag=current_theme_tag no_wrapper=true %}

{% endfor %}

</div>
<h2>Anderen evenementen en bijeenkomsten</h2>
<div class="content-body mb-xl">
<p>Houdt onze nieuwsbrief in de gaten voor andere evenementen en bijeenkomsten rondom open.</p>
</div>
<div class="mb-xl text-center">
    {% include laposta.html %}
    <p class="content-body container-narrow mb-md">Wil je ook lid worden?  <a href="/lid-worden">meld je aan!</a></p>
</div>

<div class="container-narrow container-center">
<h3 class="connection-title mb-md">Verken de thema's</h3>
{% include tags-list.html %}
</div>