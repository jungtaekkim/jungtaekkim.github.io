---
layout: page
permalink: /publications/
title: Publications
description: "* and ¶ indicate equal contribution by representing co-first and co-corresponding authors, respectively.<br>This list includes peer-reviewed presentations."
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
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
