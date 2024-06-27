---
layout: default
title: Berichten
permalink: /berichten/
---

Open Nederland schrijft en verzamelt berichten die het open domein in Nederland raken. Heb je een tip? Neem contact met ons via [bestuur@opennederland.nl](mailto:bestuur@opennederland.nl)! 

## Berichten
{% for post in site.posts %}
{% include bericht.html bericht=post %}
{% endfor %}
