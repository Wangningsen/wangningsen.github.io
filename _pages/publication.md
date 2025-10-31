---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


Xiaoke Huang*, Ningsen Wang*, Hui Liu, Xianfeng Tang, Yuyin Zhou. **MedVLSynther: Synthesizing High-Quality Visual Question Answering from Medical Documents with Generator-Verifier LMMs**, in arXiv ([PDF](https://arxiv.org/pdf/2510.25867))
