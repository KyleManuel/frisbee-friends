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
            <path d="M6 8h12l-1 12H7L6 8z"></path>
            <path d="M9 8a3 3 0 0 1 6 0"></path>
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

<section class="feature-section">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">Everything You Need</h2>
      <p class="section-subtitle">
        From premium gear to custom designs and global events – Frisbee Friends is your ultimate companion
      </p>
    </div>
    <div class="feature-grid">
        <a class="feature-card" data-accent="purple" href="{{ '/shop/' | relative_url }}">
            <div class="feature-icon feature-icon--purple" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                <path d="M6 8h12l-1 12H7L6 8z"></path>
                <path d="M9 8a3 3 0 0 1 6 0"></path>
            </svg>
            </div>
            <h3>Premium Shop</h3>
            <p>High-quality jerseys, discs, and gear for players and teams</p>
            <div class="feature-link">Browse Shop <span aria-hidden="true">→</span></div>
        </a>

        <a class="feature-card" data-accent="pink" href="{{ '/jersey/' | relative_url }}">
            <div class="feature-icon feature-icon--pink" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                <path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1a1 1 0 0 1 0-2h2a4 4 0 0 0 0-8h-2z"></path>
                <circle cx="8.5" cy="10.5" r="1"></circle>
                <circle cx="12" cy="8.5" r="1"></circle>
                <circle cx="15.5" cy="10.5" r="1"></circle>
            </svg>
            </div>
            <h3>Custom Builders</h3>
            <p>Design your own jerseys and discs with our interactive tools</p>
            <div class="feature-link">Start Designing <span aria-hidden="true">→</span></div>
        </a>

        <a class="feature-card" data-accent="rose" href="{{ '/events/' | relative_url }}">
            <div class="feature-icon feature-icon--rose" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                <path d="M8 3v3M16 3v3"></path>
                <rect x="4" y="6" width="16" height="14" rx="2"></rect>
                <path d="M4 10h16"></path>
            </svg>
            </div>
            <h3>Events Hub</h3>
            <p>Tournaments, pickup games, and leagues happening near you</p>
            <div class="feature-link">Explore Events <span aria-hidden="true">→</span></div>
        </a>

        <a class="feature-card" data-accent="blue" href="{{ '/community/' | relative_url }}">
            <div class="feature-icon feature-icon--blue" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="3"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a3 3 0 0 1 0 5.75"></path>
            </svg>
            </div>
            <h3>Global Community</h3>
            <p>Connect with players, share content, and grow the sport</p>
            <div class="feature-link">Join Community <span aria-hidden="true">→</span></div>
        </a>
    </div>
  </div>
</section>

<section class="product-section">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">Featured Products</h2>
      <p class="section-subtitle">
        Check out our most popular items
      </p>
    </div>
    <div class="product-grid">
      <!-- Product 1 -->
      <a class="product-card" href="{{ '/shop/' | relative_url }}">
        <div class="product-media">
          <img src="{{ '/assets/img/product-jersey.jpg' | relative_url }}" alt="Custom Team Jerseys">
        </div>

        <div class="product-body">
          <h3 class="product-title">Custom Team Jerseys</h3>
          <p class="product-subtitle">Sublimated designs with your team colors and logo</p>

          <div class="product-bottom">
            <div class="product-price">From $45</div>
            <div class="product-cta">Shop Now</div>
          </div>
        </div>
      </a>

      <!-- Product 2 -->
      <a class="product-card" href="{{ '/shop/' | relative_url }}">
        <div class="product-media">
          <img src="{{ '/assets/img/product-disc.jpg' | relative_url }}" alt="Professional Discs">
        </div>

        <div class="product-body">
          <h3 class="product-title">Professional Discs</h3>
          <p class="product-subtitle">WFDF approved discs for competitive play</p>

          <div class="product-bottom">
            <div class="product-price">$15</div>
            <div class="product-cta">Shop Now</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>