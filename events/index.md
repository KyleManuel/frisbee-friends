---
layout: default
title: Events
page_css: /events/events.css
---

<section class="events-page">
  <div class="container">
    <div class="events-head">
      <h1 class="events-title">Events</h1>
      <p class="events-subtitle">Upcoming WFDF events (auto-synced).</p>
    </div>

    <div id="events-grid" class="events-grid"></div>
    <div id="events-empty" class="events-empty" style="display:none;">No upcoming events found.</div>
  </div>
</section>

<script>
  (function () {
    const grid = document.getElementById("events-grid");
    const empty = document.getElementById("events-empty");

    function fmtDate(iso) {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    }

    function isUpcoming(startISO) {
      return new Date(startISO).getTime() >= Date.now() - (24 * 60 * 60 * 1000); // allow yesterday
    }

    fetch("{{ '/assets/data/events.json' | relative_url }}")
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(events => {
        const upcoming = (events || []).filter(e => e.startISO && isUpcoming(e.startISO)).slice(0, 30);

        if (!upcoming.length) {
          empty.style.display = "block";
          return;
        }

        grid.innerHTML = upcoming.map(e => {
          const dateText = e.endISO ? `${fmtDate(e.startISO)} – ${fmtDate(e.endISO)}` : fmtDate(e.startISO);
          const location = (e.location || "").trim();
          const link = (e.url || "").trim();

          return `
            <article class="event-card">
              <div class="event-top">
                <div class="event-date">${dateText}</div>
              </div>

              <h3 class="event-name">${escapeHtml(e.title)}</h3>

              ${location ? `<div class="event-loc">${escapeHtml(location)}</div>` : ``}

              <div class="event-actions">
                ${link ? `<a class="event-btn" href="${escapeAttr(link)}" target="_blank" rel="noopener">View</a>` : ``}
              </div>
            </article>
          `;
        }).join("");
      })
      .catch(() => {
        empty.style.display = "block";
        empty.textContent = "Could not load events right now.";
      });

    function escapeHtml(str) {
      return String(str).replace(/[&<>"']/g, s => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
      }[s]));
    }
    function escapeAttr(str) {
      return escapeHtml(str).replace(/"/g, "&quot;");
    }
  })();
</script>