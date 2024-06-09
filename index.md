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

{% for post in site.posts limit: 3 %}
{% include bericht.html bericht=post %}
{% endfor %}

[Bekijk alle berichten]({{ "/berichten/" | relative_url }})

## Agenda

<iframe width="100%" height="500px" src="https://docs.opennederland.nu/apps/calendar/embed/pGFnsor2YAC26Bez/listMonth/now"></iframe>

{% include creative-commons.md %}

## Lid worden?

Werk jij ook aan open in jouw domein en wil je graag kennis en ervaring delen met de andere leden van Vereniging Open Nederland? [Word dan lid!]({{ "/leden/" | relative_url }})
