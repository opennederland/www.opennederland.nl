---
layout: default
title: Berichten
permalink: /berichten/
---

Open Nederland schrijft en verzamelt berichten die het open domein in Nederland raken. De onderstaande lijst met berichten zijn berichten die wij hebben gecureerd uit de vele berichten rondom domeinen van Open in Nederland. 

Open Nederland verzamelt ook feeds van onze leden, wanneer deze voornamelijk over domeinen van open gaan. Ga naar het [Nieuws uit het Netwerk](/nieuws-netwerk/) op alle beschikbare feeds te bekijken. 

Heb je een tip? Neem contact met ons via [bestuur@opennederland.nl](mailto:bestuur@opennederland.nl)! 

<hr/>

{% for post in site.posts %}
{% include bericht.html bericht=post %}
{% endfor %}
