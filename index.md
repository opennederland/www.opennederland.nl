---
layout: default
title: Het netwerk voor Open in Nederland
menu_title: Home
order: 1
---

<div class="mb-xl container-narrow text-center">
    
    <p class="mission-statement mt-0 mb-md">
        Vereniging Open Nederland verbindt makers, adviseurs en organisaties die werken aan 'Open'. 
        Van Open Source tot Open Science. Wij verbinden open.
    </p>

    <div class="d-flex justify-center flex-wrap gap-md">
        <a href="{{ "/lid-worden/" | relative_url }}" class="main-item">
            Sluit je aan
        </a>
        <a href="{{ "/vereniging/" | relative_url }}" class="main-item secondary">
            Over de vereniging
        </a>
    </div>
</div>

<hr />

<div class="mb-xl container-narrow text-center">
    <blockquote class="quote-statement">
        "{{ site.open-definition }}"
    </blockquote>
</div>

<hr />

<div class="mb-xl text-center">
    <h2 class="mb-md">Verken het netwerk per thema</h2>
    <div class="tag-cloud">
        {% include tags-list.html %}
    </div>
</div>

<hr />

<div class="mb-xl text-center">
    <h2>Onze werkgroepen</h2>
    {% include working_groups.html %}
    <p class="content-body container-narrow mb-md">Meedoen of zelf een activiteit beginnen? Neem <a href="/contact/">contact</a> op</p>
</div>

<hr />
<div class="mb-xl text-center">
    <h2>Onze standpunten</h2>
    {% include standpunten.html %}
</div>

<hr />

<div class="mb-xl">
    <h2 class="text-center">Nieuws uit het netwerk</h2>
    
    <div class="container-narrow text-center content-body mb-md">
        <p>
            Een overzicht van wat er speelt bij <a href="{{ "/leden/" | relative_url }}">onze leden</a> en partners.
            Heb je zelf een tip? <a href="mailto:bestuur@opennederland.nl">Mail ons!</a>
        </p>
    </div>

    <div class="container-narrow mb-md">
        <details class="text-muted" style="font-size: 0.9em;">
            <summary style="cursor: pointer; text-align: center;">Hoe werkt dit nieuwsoverzicht?</summary>
            <div class="mt-sm p-3 bg-light border rounded">
                <p class="mb-0">
                    Wanneer er een RSS feed beschikbaar is kunnen wij deze ook hier tonen. 
                    Dit is een overzicht wat er afgelopen periode op de sites van deze leden
                    en aanverwante organisaties geplaatst is. Open Nederland heeft geen 
                    controle over de inhoud van deze berichten.
                </p>
            </div>
        </details>
    </div>

    {% include nieuwsnetwerk.html limit=3 %}

    <div class="container-center mt-md">
        <a href="{{ "/nieuws-netwerk/" | relative_url }}" class="main-item">Bekijk al het nieuws</a>
    </div>
</div>

<hr />

<div class="mb-xl text-center">
    {% include laposta.html %}
    <p class="content-body container-narrow mb-md">Wil je ook lid worden?  <a href="/lid-worden">meld je aan!</a></p>
</div>