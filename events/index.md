---
layout: default
title: Events
page_css: /events/events.css
---

<section class="page-header-container">
  <div class="container">
    <div class="page-head">
      <h1 class="page-title">Events</h1>
      <p class="page-subtitle">Find tournaments, pickup games, and clinics near you</p>
    </div>

    <div id="events-grid" class="events-cards"></div>
    <div id="events-empty" class="events-empty" style="display:none;">No upcoming events found.</div>
  </div>
</section>

<script>
(function () {
  const grid = document.getElementById("events-grid");
  const empty = document.getElementById("events-empty");

  const jsonUrl = "{{ '/assets/data/events.json' | relative_url }}";

  const fallbackImg = "{{ '/assets/img/community-event.jpg' | relative_url }}"; // use yours
  const defaultType = "Tournament"; // WFDF ICS usually doesn’t include a “type” field

  function fmtDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

    function fmtTimeRange(startISO, endISO, allDay) {
    if (allDay) return "All day";

    const start = new Date(startISO);
    const end = endISO ? new Date(endISO) : null;

    const t = (dt) => dt.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

    if (!end) return t(start);

    const diff = Math.abs(end.getTime() - start.getTime());
    if (diff < 60 * 1000) return t(start);

    return `${t(start)} – ${t(end)}`;
    }

  function isUpcoming(startISO) {
    // allow today + future (with small grace window)
    return new Date(startISO).getTime() >= Date.now() - (12 * 60 * 60 * 1000);
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, s => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[s]));
  }

  function cardHtml(e) {
    const title = escapeHtml(e.title || "Untitled event");
    const location = escapeHtml(e.location || "");
    const dateText =
    (e.startISO && e.endISO && e.allDay)
        ? `${fmtDate(e.startISO)} – ${fmtDate(e.endISO)}`
        : (e.startISO ? fmtDate(e.startISO) : "");
    const timeText = e.startISO ? fmtTimeRange(e.startISO, e.endISO, e.allDay) : "";
    const type = escapeHtml(e.type || defaultType);
    const participants = (typeof e.participants === "number") ? `${e.participants} participants` : "";
    const image = escapeHtml(e.image || fallbackImg);

    const learnMoreHref = e.url ? escapeHtml(e.url) : "#";
    const joinHref = e.joinUrl ? escapeHtml(e.joinUrl) : learnMoreHref;

    return `
      <article class="event-card">
        <div class="event-img">
          <img src="${image}" alt="">
        </div>

        <div class="event-body">
          <h2 class="event-title">${title}</h2>
          <span class="event-pill">${type}</span>

          <ul class="event-meta">
            ${dateText ? `<li>${iconCalendar()}<span>${escapeHtml(dateText)}</span></li>` : ``}
            ${timeText ? `<li>${iconClock()}<span>${escapeHtml(timeText)}</span></li>` : ``}
            ${location ? `<li>${iconPin()}<span>${location}</span></li>` : ``}
            ${participants ? `<li>${iconUsers()}<span>${escapeHtml(participants)}</span></li>` : ``}
          </ul>

          <div class="event-actions">
            <a class="event-btn event-btn-primary" href="${joinHref}" target="_blank" rel="noopener">Join Event</a>
            <a class="event-btn event-btn-ghost" href="${learnMoreHref}" target="_blank" rel="noopener">Learn More</a>
          </div>
        </div>
      </article>
    `;
  }

  function iconCalendar() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
      <path d="M8 3v3M16 3v3"></path>
      <rect x="4" y="6" width="16" height="14" rx="2"></rect>
      <path d="M4 10h16"></path>
    </svg>`;
  }

  function iconClock() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v5l3 2"></path>
    </svg>`;
  }

  function iconPin() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
      <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z"></path>
      <circle cx="12" cy="10" r="2"></circle>
    </svg>`;
  }

  function iconUsers() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="3"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a3 3 0 0 1 0 5.75"></path>
    </svg>`;
  }

  fetch(jsonUrl)
    .then(r => r.ok ? r.json() : Promise.reject(r))
    .then(events => {
      const upcoming = (events || [])
        .filter(e => e.startISO && isUpcoming(e.startISO))
        .slice(0, 20);

      if (!upcoming.length) {
        empty.style.display = "block";
        return;
      }

      grid.innerHTML = upcoming.map(cardHtml).join("");
    })
    .catch(() => {
      empty.style.display = "block";
      empty.textContent = "Could not load events right now.";
    });
})();
</script>