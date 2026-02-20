import fs from "node:fs";
import ical from "node-ical";

const [,, inPath, outPath] = process.argv;

if (!inPath || !outPath) {
  console.error("Usage: node scripts/ics-to-json.mjs <input.ics> <output.json>");
  process.exit(1);
}

const raw = fs.readFileSync(inPath, "utf8");
const data = ical.parseICS(raw);

const events = Object.values(data)
  .filter((item) => item && item.type === "VEVENT" && item.start)
  .map((ev) => {
    const start = new Date(ev.start);
    const end = ev.end ? new Date(ev.end) : null;

    return {
      uid: ev.uid || `${ev.summary}-${start.toISOString()}`,
      title: ev.summary || "Untitled event",
      description: ev.description || "",
      location: ev.location || "",
      url: ev.url || "",
      startISO: start.toISOString(),
      endISO: end ? end.toISOString() : "",
      allDay: !!ev.datetype && String(ev.datetype).toLowerCase() === "date",
    };
  })
  .sort((a, b) => new Date(a.startISO) - new Date(b.startISO));

fs.writeFileSync(outPath, JSON.stringify(events, null, 2), "utf8");
console.log(`Wrote ${events.length} events -> ${outPath}`);