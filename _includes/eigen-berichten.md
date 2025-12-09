## Uitgelichte berichten

Open Nederland schrijft en verzamelt berichten die het open domein in Nederland raken. De onderstaande lijst met berichten zijn berichten die wij hebben gecureerd uit de vele berichten rondom domeinen van Open in Nederland.

Heb je een tip? Neem contact met ons via [bestuur@opennederland.nl](mailto:bestuur@opennederland.nl)!

{% for post in site.posts limit: 3 %}
{% include bericht.html bericht=post %}
{% endfor %}

<div style="padding: 1em 0">
<a href="{{ "/berichten/" | relative_url }}" class="main-item">Bekijk alle berichten</a>
</div>