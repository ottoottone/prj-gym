---
layout: default
title: Exercises
---

<div class="exercise-only-head">
  <p class="eyebrow">TUESDAY / SATURDAY · 45 MINUTES</p>
  <h1>Exercises</h1>
  <div class="cardio-reference"><strong>Cardio reference</strong><span>Estimated maximum: ~177 bpm · Aim for 88–106 bpm easy or 106–124 bpm moderate.</span><small>Use the talk test too: you should be able to speak in short sentences. Heart-rate formulas are estimates; follow medical advice or device warnings if they differ.</small></div>
</div>

{% for workout in site.data.workouts %}
<section class="workout {{ workout.tone }}" id="{{ workout.id }}">
  <div class="workout-head"><div><p class="eyebrow">{{ workout.label }} · {{ workout.time }}</p><h2>{{ workout.title }}</h2></div><a class="jump" href="#{{ workout.id }}">#{{ workout.label | downcase }}</a></div>
  {% for block in workout.blocks %}
  <div class="block"><div class="block-label"><strong>{{ block.name }}</strong><span>{{ block.minutes }} min</span></div><p>{{ block.detail }}</p>
    {% if block.exercises %}<div class="exercise-grid">{% for exercise in block.exercises %}<article class="exercise"><h3>{{ exercise.name }}</h3><p class="machine">{{ exercise.machine }}</p><p>{{ exercise.cue }}</p><p class="alternative"><b>Alternative:</b> {{ exercise.alternative }}</p></article>{% endfor %}</div>{% endif %}
  </div>
  {% endfor %}
</section>
{% endfor %}
