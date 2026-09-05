---
layout: default
title: De vereniging
permalink: /vereniging/
menu_title: Over
order: 4
---
### Onze missie
Vereniging Open Nederland zet zich in voor vrije toegang tot informatie, kennis en cultuur voor iedereen. 
Wij streven naar een samenleving waarin informatie, kennis en cultuur voor iedereen beschikbaar is.
Waarin dit materiaal vrij gebruikt, bewerkt en gedeeld mag worden, zodat we samen sneller kunnen leren en innoveren.

> *De formele doelstellingen zijn vastgelegd in onze [statuten](/assets/docs/concept akte van vaststelling statuten vereniging Open Nederland.pdf) (PDF).*

### Wat we doen
Wij verbinden professionals en organisaties die hiermee en hieraan werken in diverse sectoren: van onderwijs, onderzoek en zorg tot overheid en cultuur (OpenGLAM). Daarnaast behartigen we het publieke belang door gevraagd en ongevraagd input te leveren op wetsvoorstellen en consultaties. Open Nederland vormt de Nederlandse Chapter van Creative Commons en vormt zo de brug tussen het nationale en internationale open netwerk.

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