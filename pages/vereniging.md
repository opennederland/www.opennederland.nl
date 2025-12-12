---
layout: default
title: De vereniging
permalink: /vereniging/
menu_title: Over
order: 4
---

Vereniging Open Nederland is het Nederlandse netwerk voor iedereen die werkt aan 'Open'. Wij verbinden (sectoren van) makers, adviseurs, juristen en ondernemers die geloven dat kennis, cultuur en technologie vrij deelbaar moeten zijn.

### Onze Missie

Ons doel is helder: het bevorderen van toegang. Wij streven naar een samenleving waarin informatie, kennis en cultuur voor iedereen beschikbaar is. Materiaal dat vrij gebruikt, bewerkt en gedeeld mag worden, zodat we samen sneller kunnen innoveren en leren.

> *De formele doelstellingen zijn vastgelegd in onze [statuten]((/assets/docs/concept akte van vaststelling statuten vereniging Open Nederland.pdf)) (PDF).*

## Organisatie

De vereniging wordt geleid door een bestuur van experts uit het veld en speelt een sleutelrol in het internationale Open landschap. Neem [contact](/contact/) op wanneer je hier voor jezelf ook een rol ziet.

Het bestuur van Open Nederland bestaat uit:

{% assign bestuur = site.members | where_exp: "lid", "lid.bestuursfunctie" %}

<div class="team-grid">
    {% for lid in bestuur %}
    <a href="{{ lid.url | relative_url }}" class="team-member">
        <strong>{{ lid.title }}</strong>
        <span>{{ lid.bestuursfunctie }}</span>
    </a>
    {% endfor %}
</div>


{% include lid-worden.md %}

{% include creative-commons.md %}
