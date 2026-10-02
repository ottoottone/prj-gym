---
layout: default
title: Two-session plan
---

<section class="hero">
  <div>
    <p class="eyebrow">TUESDAY / SATURDAY · 45 MINUTES</p>
    <h1>A repeatable gym week, not a punishment.</h1>
    <p class="lede">Two conservative full-body sessions with different emphasis, enough recovery, and a simple way to calibrate every load.</p>
    <div class="notice"><strong>Current status:</strong> loads are intentionally blank until the first calibration visit. No guessed kilos.</div>
  </div>
  <div class="hero-art" aria-label="Illustration of a steady training week">
    <div class="orb orb-one"></div><div class="orb orb-two"></div><div class="figure"><span></span><i></i><b></b></div>
  </div>
</section>

<section class="visual-strip"><figure><img src="{{ '/assets/images/steady-cardio.svg' | relative_url }}" alt="Person using a cardio machine at an easy conversational pace"><figcaption>Cardio stays steady, not maximal.</figcaption></figure><figure><img src="{{ '/assets/images/neutral-neck.svg' | relative_url }}" alt="Person training with a neutral neck and controlled range"><figcaption>Keep the neck neutral and the range comfortable.</figcaption></figure></section>

<section class="principles">
  <div><span>01</span><h2>Safety first</h2><p>Move slowly, keep the neck neutral, and stop for sharp pain, dizziness, unusual shortness of breath, or symptoms that worsen.</p></div>
  <div><span>02</span><h2>Easy enough to repeat</h2><p>Begin around RPE 5–6/10: finish each set feeling you could do 3–4 more good repetitions.</p></div>
  <div><span>03</span><h2>Progress from evidence</h2><p>Only add load after clean repetitions feel repeatable across two visits. Record the machine unit: kg or lb.</p></div>
</section>

{% for workout in site.data.workouts %}
<section class="workout {{ workout.tone }}" id="{{ workout.id }}">
  <div class="workout-head"><div><p class="eyebrow">{{ workout.label }} · {{ workout.time }}</p><h2>{{ workout.title }}</h2><p>{{ workout.target }}</p></div><a class="jump" href="#{{ workout.id }}">#{{ workout.label | downcase }}</a></div>
  {% for block in workout.blocks %}
  <div class="block"><div class="block-label"><strong>{{ block.name }}</strong><span>{{ block.minutes }} min</span></div><p>{{ block.detail }}</p>
    {% if block.exercises %}<div class="exercise-grid">{% for exercise in block.exercises %}<article class="exercise"><h3>{{ exercise.name }}</h3><p class="machine">{{ exercise.machine }}</p><p>{{ exercise.cue }}</p><p class="alternative"><b>Alternative:</b> {{ exercise.alternative }}</p></article>{% endfor %}</div>{% endif %}
  </div>
  {% endfor %}
</section>
{% endfor %}

<section class="calibration"><div><p class="eyebrow">FIRST VISIT</p><h2>Find your starting load without guessing.</h2><p>For each strength exercise, do one very light test set. Add a small amount only if the movement stays smooth and pain-free. Choose the load for 8–12 repetitions at RPE 5–6. Record machine name, load, reps, and effort.</p></div><div class="calibration-card"><strong>Log this</strong><span>Date · exercise · load · unit · reps · RPE · notes</span><small>Use the same machine and seat setting next time when possible.</small></div></section>

<section class="footer-note"><p>This is general fitness information, not medical advice. If neck symptoms become significant, persistent, or neurological, pause and consult a qualified clinician.</p><a href="/prj-gym/stats/">View monthly stats →</a></section>
