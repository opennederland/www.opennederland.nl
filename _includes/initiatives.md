{% for initiative in site.initiatives %}
### {{ initiative.title }}
{% for tag in initiative.tags %}<a href="{{ tag.url | relative_url }}" class="tag {{ tag.slug }}">#{{ tag.title }}</a>{% endfor %}

{{ initiative.content }}

[{{ initiative.website }}]({{ initiative.website }})
{% endfor %}
