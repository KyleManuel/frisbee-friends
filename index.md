---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>

  <div class="container hero-inner">
    <h1 class="hero-title">Play. Connect. Compete.</h1>

    <p class="hero-subtitle">
      Join the global Ultimate Frisbee community. Shop premium gear,
      design custom jerseys, and find your next game.
    </p>

    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/shop/' | relative_url }}">
        Shop Gear
        <span class="btn-icon" aria-hidden="true">
          <!-- shopping bag icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
            <path d="M6 7h12l-1 14H7L6 7z"></path>
            <path d="M9 7a3 3 0 0 1 6 0"></path>
          </svg>
        </span>
      </a>

      <a class="btn btn-outline" href="{{ '/events/' | relative_url }}">
        Find Events
        <span class="btn-icon" aria-hidden="true">
          <!-- calendar icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
            <path d="M8 3v3M16 3v3"></path>
            <rect x="4" y="6" width="16" height="14" rx="2"></rect>
            <path d="M4 10h16"></path>
          </svg>
        </span>
      </a>
    </div>
  </div>
</section>