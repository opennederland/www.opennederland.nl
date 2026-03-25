---
layout: default
title: "Jaarkalender"
permalink: /kalender/
menu_title: Kalender
order: 6
---

<div class="container-narrow text-center mb-xl">
    <p class="mission-statement mt-0">
        Een overzicht van de belangrijkste terugkerende momenten in het Nederlandse en internationale Open ecosysteem.
    </p>
</div>

<div class="calendar-grid">
    {% assign months = "Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December" | split: "," %}
    
    {% for month_name in months %}
        {% assign month_index = forloop.index %}
        {% assign month_events = site.agenda | where: "month", month_index | sort: "title" %}
        
        <div class="calendar-month {% if month_events.size == 0 %}empty{% endif %}">
            <h3 class="month-title">{{ month_name }}</h3>
            
            {% if month_events.size > 0 %}
                <ul class="calendar-event-list">
                    {% for event in month_events %}
                        <li class="calendar-event-item">
                            <a href="{{ event.event_url }}" target="_blank" class="event-link" title="{{ event.title }}">
                                {% assign tag_slug = event.tags[0] | slugify %}
                                <span class="event-tag-dot" style="background-color: var(--col-{{ tag_slug }}, var(--border-color))"></span>
                                <div class="event-details">
                                    <span class="event-name">{{ event.title }}</span>
                                    <small class="event-date">{{ event.date_string }}</small>
                                </div>
                            </a>
                        </li>
                    {% endfor %}
                </ul>
            {% else %}
                <p class="no-events">Geen vaste data</p>
            {% endif %}
        </div>
    {% endfor %}
</div>

{% assign floating_events = site.agenda | where_exp: "item", "item.month == nil" %}
{% if floating_events.size > 0 %}
<hr />
<div class="mb-xl">
    <h2>Wisselende data & Onregelmatig</h2>
    <p>Deze evenementen vinden periodiek plaats maar hebben geen vaste maand:</p>
    {% include events.html events=floating_events %}
</div>
{% endif %}

<hr />

<div class="mb-xl text-center">
    {% include laposta.html %}
    <p class="content-body container-narrow mb-md">Mis je een belangrijk evenement? <a href="/contact">Laat het ons weten!</a></p>
</div>

<div class="container-narrow container-center">
    <h3 class="connection-title mb-md">Verken thema's</h3>
    {% include tags-list.html %}
</div>