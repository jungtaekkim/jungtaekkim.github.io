---
layout: page
permalink: /publications/
title: Publications
description:
years: [2018, 2017, 2016, 1967, 1956, 1950, 1935, 1905]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
