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
    {% if block.exercises %}<div class="exercise-grid">{% for exercise in block.exercises %}<article class="exercise"><h3>{{ exercise.name }}</h3><p class="machine">{{ exercise.machine }}</p><p>{{ exercise.cue }}</p><p class="alternative"><b>Alternative:</b> {{ exercise.alternative }}</p><button class="exercise-open" type="button" data-modal="modal-{{ exercise.id }}">Open movement guide <span>↗</span></button></article><dialog class="exercise-modal" id="modal-{{ exercise.id }}"><div class="modal-head"><div><p class="eyebrow">MOVEMENT GUIDE</p><h2>{{ exercise.name }}</h2><p class="machine">{{ exercise.machine }}</p></div><button class="modal-close" type="button" data-close aria-label="Close movement guide">×</button></div><div class="modal-content"><img src="{{ exercise.image | relative_url }}" alt="Illustration of {{ exercise.name }}"><div class="modal-copy"><h3>How to do it</h3><p>{{ exercise.steps }}</p><div class="attention"><strong>PAY ATTENTION</strong><p>{{ exercise.attention }}</p></div></div></div></dialog>{% endfor %}</div>{% endif %}
  </div>
  {% endfor %}
</section>
{% endfor %}
