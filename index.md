---
layout: default
title: Activiteiten
order: 1
---
<div style="display: flex; margin: auto; text-align: center; flex-wrap: wrap">
    <a href="{{ "publiek-domeindag/" | relative_url }}" class="main-item">Publiek Domeindag</a>
    <a href="{{ "/openup/" | relative_url }}" class="main-item">OpenUp! Meetups</a>
</div>

## Berichten

Open Nederland schrijft en verzamelt berichten die het open domein in Nederland raken. De onderstaande lijst met berichten zijn berichten die wij hebben gecureerd uit de vele berichten rondom domeinen van Open in Nederland.

Open Nederland verzamelt ook feeds van onze leden, wanneer deze voornamelijk over domeinen van open gaan. Op [Nieuws uit het Netwerk](/nieuws-netwerk/) zijn de beschikbare feeds te bekijken.

Heb je een tip? Neem contact met ons via [bestuur@opennederland.nl](mailto:bestuur@opennederland.nl)!

{% for post in site.posts limit: 3 %}
{% include bericht.html bericht=post %}
{% endfor %}

[Bekijk alle berichten]({{ "/berichten/" | relative_url }})

## Agenda

<iframe width="100%" height="500px" src="https://docs.opennederland.nu/apps/calendar/embed/pGFnsor2YAC26Bez/listMonth/now"></iframe>

{% include creative-commons.md %}

## Lid worden?

Werk jij ook aan open in jouw domein en wil je graag kennis en ervaring delen met de andere leden van Vereniging Open Nederland? [Word dan lid!]({{ "/leden/" | relative_url }})

## Aanmelden nieuwsbrief

(Nog) geen lid worden, maar wel op de hoogte blijven van de ontwikkelingen van Open Nederland en van Open in Nederland? Meld je dan aan voor de nieuwsbrief.

{% include laposta.html %}