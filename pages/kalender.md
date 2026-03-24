---
layout: default
title: "Kalender"
permalink: /kalender/
---

<div class="content-body mb-xl">
    <p>Gedurende het jaar zijn er verschillende terugkerende momenten waarop de 'Open' bewegingen samenkomen.</p>
</div>

{% assign all_events = site.agenda | sort: "month" %}

{% assign all_events = site.agenda | sort: "month" %}

<div class="initiatives-grid mb-xl">
    {% for event in all_events %}
        {% assign current_theme_tag = event.tags[0] %}
        {% comment %} Maak een array met alleen dit ene event {% endcomment %}
        {% assign single_event_list = "" | split: "" | push: event %}
        
        {% include events.html events=single_event_list tag=current_theme_tag no_wrapper=true %}
    {% endfor %}
</div>