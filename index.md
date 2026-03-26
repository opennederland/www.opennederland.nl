---
layout: default
title: Verbinder van Open
---
{% assign members_with_rss = site.members | where_exp: "member", "member.rss" %}
{% assign non_member_rss = site.data.non_member_rss %}
{% assign total_feeds = members_with_rss.size | plus: non_member_rss.size %}
{% assign count_people = site.members | where: "type", "persoon" | size %}
{% assign count_orgs = site.members | where: "type", "organisatie" | size %}
{% assign count_initiatives = site.initiatives | size %}
{% assign count_platforms = site.platforms | size %}

<div class="text-center mb-xl">
    <p class="mission-statement">Navigeer direct naar de kennis, data en experts in 11 domeinen:</p>
</div>

<div class="tag-cloud justify-center mb-xl" style="gap: 1.5rem;">
  {% for tag in site.tags %}
    <a href="{{ tag.url | relative_url }}" class="tag {{ tag.slug }}" style="font-size: 1.1rem; padding: 0.8em 1.2em;">
        {% if tag.icon %}<i class="fa-solid {{ tag.icon }}"></i>&nbsp;{% endif %}#{{ tag.title }}
    </a>
  {% endfor %}
</div>

<div class="highlight-section container-narrow text-center mb-xl">
    <p class="content-body mb-0">
        Open Nederland verbindt meer dan <strong class="font-bold">{{ count_people }}</strong> <a href="/leden/personen/">professionals</a> en <strong class="font-bold">{{ count_orgs }}</strong> <a href="/leden/">organisaties</a>. 
        Wij volgen <strong class="font-bold">{{ count_initiatives }}</strong> <a href="/verklaringen/">verklaringen en manifesten</a> en kennen <strong class="font-bold">{{ count_platforms }}</strong> <a href="/platforms/">open platformen</a> die actief zijn in Nederland.
    </p>
</div>

<hr />

<div class="mb-xl">
    <h2 class="text-center mb-md">Nu in het netwerk</h2>
    <p class="text-center content-body container-narrow mb-lg">
        Wij zijn de verzamelplaats voor nieuws uit het hele open ecosysteem. Dit is wat onze leden en partners momenteel delen:
    </p>
    
    {% include nieuwsnetwerk.html limit=6 %}

    <div class="container-center mt-lg">
        <a href="/nieuws-netwerk/" class="main-item">Ontdek alle {{ total_feeds }} rss-feeds</a>
    </div>
</div>

<hr />

<div class="initiatives-grid mb-xl" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
    
    <div class="news-card">
        <h3>📅 Agenda</h3>
        <p>Belangrijke momenten zoals Publiek Domeindag en Open Data Day op één rij.</p>
        <a href="/kalender/" class="font-bold">Bekijk de jaarkalender →</a>
    </div>

    <div class="news-card">
        <h3>🌐 Netwerkverkenner</h3>
        <p>Verken de dwarsverbanden tussen 150+ professionals, organisaties en manifesten in onze interactieve graaf.</p>
        <a href="/network/" class="font-bold">Open de verkenner →</a>
    </div>

</div>

<hr />

<div class="newsletter-box">
    <h3>Doe mee met Open Nederland</h3>
    <p>Sluit je aan bij de beweging of meld je aan voor de updates.</p>
    <div class="d-flex justify-center gap-md mt-md flex-wrap">
        <a href="/lid-worden/" class="main-item">Lid worden (Gratis)</a>
        <a href="/contact/" class="main-item secondary">Iets toevoegen</a>
    </div>
</div>