---
layout: default
title: Exercises
---

<div class="exercise-only-head">
  <p class="eyebrow">TUESDAY / SATURDAY · 45 MINUTES</p>
  <h1>Exercises</h1>
  <div class="cardio-reference"><strong>Cardio reference</strong><span>Estimated maximum: ~177 bpm · Aim for 88–106 bpm easy or 106–124 bpm moderate.</span><small>Use the talk test too: you should be able to speak in short sentences. Heart-rate formulas are estimates; follow medical advice or device warnings if they differ.</small></div>
</div>

<div class="workout-switch" role="tablist" aria-label="Choose a workout set">
  <button class="set-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="set-a" data-set="set-a">Set A <span>Upper body + core</span></button>
  <button class="set-tab" type="button" role="tab" aria-selected="false" aria-controls="set-b" data-set="set-b">Set B <span>Lower body + posture</span></button>
</div>

{% for workout in site.data.workouts %}
<section class="workout plan-panel {{ workout.tone }}{% if workout.id == 'set-a' %} is-visible{% endif %}" id="{{ workout.id }}" role="tabpanel" aria-label="{{ workout.label }} — {{ workout.title }}">
  <div class="workout-head"><div><p class="eyebrow">{{ workout.label }} · {{ workout.time }}</p><h2>{{ workout.title }}</h2></div></div>
  {% for block in workout.blocks %}
  <div class="block"><div class="block-label"><strong>{{ block.name }}</strong><span>{{ block.minutes }} min</span></div><p>{{ block.detail }}</p>
    {% if block.exercises %}<div class="exercise-grid">{% for exercise in block.exercises %}<article class="exercise"><h3>{{ exercise.name }}</h3><p class="machine">{{ exercise.machine }}</p><p>{{ exercise.cue }}</p><p class="alternative"><b>Alternative:</b> {{ exercise.alternative }}</p></article>{% endfor %}</div>{% endif %}
  </div>
  {% endfor %}
</section>
{% endfor %}
