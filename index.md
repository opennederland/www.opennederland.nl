---
layout: default
title: Het netwerk voor Open in Nederland
order: 1
---

<section style="margin: 2em auto 4em auto; text-align: center; max-width: 800px;">
    
    <p style="font-size: 1.25em; line-height: 1.6; color: #333; margin-bottom: 2em;">
        Vereniging Open Nederland verbindt makers, adviseurs en organisaties die werken aan 'Open'. 
        Van Open Source tot Open Science. Wij staan voor open.
    </p>

    <div style="display: flex; justify-content: center; gap: 1em; flex-wrap: wrap;">
        <a href="{{ "/vereniging/#lid-worden" | relative_url }}" class="main-item">
            Sluit je aan
        </a>
        <a href="{{ "/vereniging/" | relative_url }}" class="main-item" >
            Over de vereniging
        </a>
    </div>
</section>

<hr />

## Onze activiteiten

<p style="text-align: center; margin-bottom: 1.5em; max-width: 700px; margin-left: auto; margin-right: auto;">
    Ontmoet gelijkgestemden tijdens onze terugkerende evenementen.
</p>

<div style="display: flex; margin: auto; text-align: center; flex-wrap: wrap; justify-content: center; gap: 1em;">
    <a href="{{ "publiek-domeindag/" | relative_url }}" class="main-item">Publiek Domeindag</a>
    <a href="{{ "/openup/" | relative_url }}" class="main-item">OpenUp! Meetups</a>
</div>

<hr />

## Nieuws uit het netwerk

<p>
    Een overzicht van wat er speelt bij <a href="{{ "/leden/" | relative_url }}">onze leden</a> en partners.
    Heb je zelf een tip? <a href="mailto:bestuur@opennederland.nl">Mail ons!</a>
</p>

<details style="margin-bottom: 2em; font-size: 0.9em; color: #555;">
    <summary style="cursor: pointer;">Hoe werkt dit nieuwsoverzicht?</summary>
    <div style="margin-top: 0.5em; padding-left: 1em; border-left: 3px solid #ddd;">
        <p>
            Wanneer er een RSS feed beschikbaar is kunnen wij deze ook hier tonen. 
            Dit is een overzicht wat er afgelopen periode op de sites van deze leden
            en aanverwante organisaties geplaatst is. Open Nederland heeft geen 
            controle over de inhoud van deze berichten en niet alle berichten zullen
            even relevant zijn voor de missie van Open Nederland.
        </p>
    </div>
</details>

{% include nieuwsnetwerk.html limit=3 %}

<div style="padding: 1em 0; text-align: center;">
    <a href="{{ "/nieuws-netwerk/" | relative_url }}" class="main-item">Bekijk al het nieuws</a>
</div>

<hr />

## Blijf op de hoogte

(Nog) geen lid, maar wel geïnteresseerd in de ontwikkelingen van Open in Nederland? Meld je aan voor de nieuwsbrief.

{% include laposta.html %}