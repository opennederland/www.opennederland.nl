{% for initiative in site.initiatives %}
### {{ initiative.title }}

{{ initiative.content }}

[{{ initiative.website }}]({{ initiative.website }})
{% endfor %}
