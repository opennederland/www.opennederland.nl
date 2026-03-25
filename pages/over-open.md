---
layout: default
title: Wat is Open?
permalink: /wat-is-open/
menu_title: Open?
order: 2
---
{% assign matching_events = site.agenda %}
{% assign matching_initiatives = site.initiatives %}
{% assign matching_platforms = site.platforms %}
{% assign matching_people = site.members | where: "type", "persoon" %}

<h2 class="mission-statement">{{ site.open-definition }}</h2>

**Delen maakt ons allemaal beter. Delen is vermenigvuldigen.**

**Open is het delen van informatie.**
Een [Open Overheid](/tags/open-overheid/) maakt documenten en besluiten openbaar, zodat de overheid verantwoordelijkheid kan afleggen. Dit bouwt vertrouwen en zorgt voor betere besluiten. Ook data die door onderzoek of de overheid wordt verzameld ([Open Data](/tags/open-data/)) wordt vrijgegeven. Dit stelt iedereen in staat om de cijfers te controleren, nieuwe analyses te maken of nieuwe apps en diensten te ontwikkelen op basis van betrouwbare feiten.

**Open is het delen van kennis.**
Het uitwisselen van kennis is wat ons mensen maakt. Toegang tot kennis zorgt voor economische ontwikkeling en bevordert sociale inclusie. [Open Onderzoek](/tags/open-onderzoek/) en [Open Access](/tags/open-access/) zorgen ervoor dat wetenschappelijk onderzoek, dat vaak met publiek geld is gefinancierd, niet verdwijnt achter betaalmuren. Iedereen – van geïnteresseerde tot professional – krijgt direct toegang. Daarnaast maakt [Open Onderwijs](/tags/open-onderwijs/) leermiddelen gratis en makkelijk beschikbaar. Dit doorbreekt financiële barrières en zorgt ervoor dat kwaliteitskennis de hele wereld bereikt.

**Open is het delen van cultuur.**
Onze geschiedenis en creativiteit zijn te waardevol om opgesloten te zitten. [Open GLAM](/tags/open-glam/) (een term voor Galleries, Libraries, Archives, en Museums) is de belofte van culturele instellingen om hun collecties breed toegankelijk te stellen. Dit betekent dat je kunstwerken en erfgoed kunt inzien en hergebruiken. Dit zorgt voor nieuwe creatieve projecten en houdt ons cultureel erfgoed levend en toegankelijk voor iedereen, waar ook ter wereld.

**Open is het delen van technologie.**
In de techniek draait delen om samenwerking, houdbaarheid en veiligheid. [Open Source](/tags/open-source/) is software waarvan de broncode voor iedereen in te zien is. Dit maakt technologie duurzamer en veiliger, omdat iedereen de code kan controleren en verbeteren. [Open Design](/tags/open-design/) past dit toe op de fysieke wereld door ontwerpen vrij te geven. Hierdoor kunnen mensen zelf apparaten maken en repareren ("van consument naar maker"), wat leidt tot snellere innovatie.

**Delen kan je niet alleen.**
Delen doe je samen. Het zijn de [Makers](/tags/makers/), de onderzoekers, de kunstenaars en de ambtenaren die hun werk onder open licenties vrijgeven. Mensen die open samenwerken, vaak vanuit een intrinsieke passie. Alleen door de actieve bijdragen van deze individuen uit alle sectoren kunnen we de beloftes van Open waarmaken.

<hr />

## Open in de praktijk
Ieder domein van open heeft eigen uitdagingen, instrumenten en netwerken. Verken de rijkdom van de Nederlandse community op de manier die bij jou past.

### 1. Zoek op thema
Ben je specifiek geïnteresseerd in één gebied? Start hier voor diepgaande dossiers en expertlijsten:
<div class="tag-cloud" style="justify-content: flex-start; margin-top: 1rem;">
    {% include tags-list.html %}
</div>

<hr />

### 2. Zoek op categorie
Ben je op zoek naar specifieke gereedschappen, data of mensen uit het hele netwerk?
<div class="quick-links">
    <span class="quick-links-title">Ga direct naar:</span>
    <a href="/kalender/" class="quick-link-btn">Jaarkalender ({{ matching_events.size }})</a>
    <a href="/verklaringen/" class="quick-link-btn">Manifesten & Verklaringen ({{ matching_initiatives.size }})</a>
    <a href="/platforms/" class="quick-link-btn">Platformen ({{ matching_platforms.size }})</a>
    <a href="/leden/personen" class="quick-link-btn">Experts & Leden ({{ matching_people.size }})</a>
</div>

<hr />

### 3. Verken het ecosysteem
Wil je zien hoe alles met elkaar verbonden is? De onderstaande grafiek toont de dwarsverbanden tussen thema's, leden en initiatieven.
{% include network-graph.html focus_node="" height="600px" %}

<div class="connection-box mt-xl">
    <h3 class="mt-0">Ontbreekt er iets?</h3>
    <p>
        Wij proberen zoveel mogelijk intiatieven, netwerken, en domeinen te beschrrijven en te verbinden.
    </p>
    <p class="mb-0">
        Neem <a href="{{ "/contact/" | relative_url }}">contact</a> met ons op of maak direct een <a href="https://github.com/opennederland/www.opennederland.nl">issue aan op GitHub</a>.
    </p>
</div>