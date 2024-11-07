---
layout: default
title: Activiteiten
order: 1
---
<div style="display: flex; margin: auto; text-align: center; flex-wrap: wrap">
    <a href="{{ "publiek-domeindag/" | relative_url }}" class="main-item">Publiek Domeindag</a>
    <a href="{{ "/openup/" | relative_url }}" class="main-item">OpenUp! Meetups</a>
</div>

## Uitgelichte berichten

Open Nederland schrijft en verzamelt berichten die het open domein in Nederland raken. De onderstaande lijst met berichten zijn berichten die wij hebben gecureerd uit de vele berichten rondom domeinen van Open in Nederland.

Heb je een tip? Neem contact met ons via [bestuur@opennederland.nl](mailto:bestuur@opennederland.nl)!

{% for post in site.posts limit: 3 %}
{% include bericht.html bericht=post %}
{% endfor %}

[Bekijk alle berichten]({{ "/berichten/" | relative_url }})

## Nieuws uit het netwerk

[Leden](https://www.opennederland.nl/leden/) en verwante organisaties plaatsen regelmatig nieuws op hun eigen platformen. Wanneer er een RSS feed beschikbaar is kunnen wij deze ook hier tonen. Dit is een overzicht wat er afgelopen periode op de sites van deze leden en aanverante organisaties geplaatst is. Open Nederland heeft geen controle over de inhoud van deze berichten en niet alle berichten zullen even relevant zijn voor de missie van Open Nederland.

Heb je een tip? Neem contact met ons via [bestuur@opennederland.nl](mailto:bestuur@opennederland.nl)!

{% include nieuwsnetwerk.html %}

## Aanmelden nieuwsbrief

(Nog) geen lid worden, maar wel op de hoogte blijven van de ontwikkelingen van Open Nederland en van Open in Nederland? Meld je dan aan voor de nieuwsbrief.

{% include laposta.html %}