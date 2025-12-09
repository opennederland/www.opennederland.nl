{% for initiative in site.initiatives %}
### {{ initiative.title }}
{% include tags.html tags=initiative.tags %}

{{ initiative.content }}

[{{ initiative.website }}]({{ initiative.website }})
{% endfor %}
