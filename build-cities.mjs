// Generates a city landing page at /<slug>/index.html for every entry in cities.mjs.
// The root index.html is the design source of truth — edit it, then rerun:
//   node build-cities.mjs
// Never hand-edit the generated city folders; changes will be overwritten.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { cities } from './cities.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const base = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// Exact-match replace that fails loudly if index.html drifted, so a city page
// can never silently ship with leftover "Los Angeles & Orange County" copy.
function swap(html, from, to, label) {
  if (!html.includes(from)) throw new Error(`build-cities: couldn't find "${label}" in index.html — update build-cities.mjs`);
  return html.split(from).join(to);
}

// Replace the content between <!--NAME--> and <!--/NAME--> markers in index.html
function block(html, name, content) {
  const re = new RegExp(`<!--${name}-->[\\s\\S]*?<!--/${name}-->`);
  if (!re.test(html)) throw new Error(`build-cities: couldn't find <!--${name}--> block in index.html — update build-cities.mjs`);
  return html.replace(re, () => content);
}

const PIN_ICON = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 43s13-12.5 13-23a13 13 0 00-26 0c0 10.5 13 23 13 23z"/><circle cx="24" cy="20" r="5" stroke="#53A6DC"/></svg>';

function reviewCard(c) {
  return `<figure class="review">
          <figcaption>${c.review.name} <span>${c.name}</span></figcaption>
          <div class="stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote>&ldquo;${c.review.quote}&rdquo;</blockquote>
        </figure>`;
}

function areaSection(c) {
  const issues = c.issues.map(issue => `
          <li class="border-l-4 border-[#53A6DC] pl-4">
            <h3 class="font-heading font-extrabold text-lg">${issue.title}</h3>
            <p class="text-[#0E2033]/70 mt-1 leading-relaxed">${issue.body}</p>
          </li>`).join('');
  const mapQuery = encodeURIComponent(`${c.name}, CA`);

  return `<!-- ===== AREA: ${c.name.toUpperCase()} ===== -->
  <section id="local" class="bg-white py-14 lg:py-20">
    <div class="max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
      <div>
        <h2 class="font-heading font-extrabold uppercase text-[#274A6A]" style="font-size:clamp(1.6rem,3.2vw,2.4rem)">Drain problems we see in ${c.name}</h2>
        <p class="text-lg text-[#0E2033]/75 mt-4 leading-relaxed">${c.eta}.</p>
        <ul class="space-y-6 mt-8">${issues}
        </ul>
      </div>
      <div class="lg:pt-2">
        <iframe title="Map of ${c.name}, CA" src="https://maps.google.com/maps?q=${mapQuery}&amp;z=13&amp;output=embed" class="w-full h-72 sm:h-96 rounded-md border border-[#DDE2E7]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="bg-[#EAF2F8] rounded-md p-5 mt-4">
          <h3 class="font-heading font-extrabold">Neighborhoods we cover in ${c.name}</h3>
          <p class="text-[#0E2033]/80 mt-1 leading-relaxed">${c.neighborhoods.join(', ')}, and everywhere in between.</p>
          <p class="text-sm text-[#0E2033]/65 mt-2">ZIP ${c.zips.length > 1 ? 'codes' : 'code'} ${c.zips.join(', ')} &middot; ${c.county}</p>
        </div>
      </div>
    </div>
  </section>`;
}

function buildCity(c) {
  let html = base;
  const where = `${c.name}, CA`;

  // Keep these pages out of organic search — they're ad landing pages, and
  // rooterchampion.net already has the indexed city pages.
  html = swap(html, '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="robots" content="noindex, follow">', 'viewport meta');

  html = swap(html,
    '<title>Plumber | $55 Drain Cleaning + Free Camera Inspection | Rooter Champion</title>',
    `<title>${c.name} Plumber | $55 Drain Cleaning + Free Camera Inspection | Rooter Champion</title>`, 'title');
  html = swap(html,
    'Same-day sewer & drain service across Los Angeles & Orange County. Licensed & insured. Call 714-305-9263.">',
    `Same-day sewer & drain service in ${c.name}, CA (${c.zips.join(', ')}). Licensed & insured. Call 714-305-9263.">`, 'meta description');
  html = swap(html,
    '<meta property="og:title" content="$55 Drain Cleaning + Free Camera Inspection | Rooter Champion">',
    `<meta property="og:title" content="$55 Drain Cleaning in ${where} | Rooter Champion">`, 'og:title');
  html = swap(html,
    'Same-day sewer & drain service across LA & Orange County. Licensed & insured. Call 714-305-9263.">',
    `Same-day sewer & drain service in ${c.name}, CA. Licensed & insured. Call 714-305-9263.">`, 'og:description');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Rooter Champion',
    description: `$55 drain cleaning with free camera inspection in ${where}.`,
    telephone: '714-305-9263',
    address: { '@type': 'PostalAddress', streetAddress: '1401 S Beach Blvd', addressLocality: 'La Habra', addressRegion: 'CA', postalCode: '90631', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: c.name, containedInPlace: { '@type': 'AdministrativeArea', name: `${c.county}, CA` } },
  };
  html = html.replace(/(<script type="application\/ld\+json">\s*)\{.*\}(\s*<\/script>)/, (_, open, close) => open + JSON.stringify(schema) + close);

  // Tag phone clicks with the city so GA4 can split them per landing page
  html = swap(html, 'event_label: el.getAttribute("href") }',
    `event_label: el.getAttribute("href"), city: "${c.name}" }`, 'phone click event');

  // Hero: "Plumbers in <city>" line so ad clicks instantly see they reached a plumber
  html = block(html, 'HERO-KICKER', `Plumbers in ${where}`);
  // Third headline line names the city
  html = block(html, 'H1-LINE3', `<span class="hero-line">
            ${PIN_ICON}
            <span>Serving ${c.name}.</span>
          </span>`);
  html = block(html, 'CARD-NOTE', `Call and we&rsquo;ll get you on the schedule, usually the same day in ${c.name}.`);
  html = block(html, 'BAND-HEADING', `Call now to book your $55 drain cleaning in ${c.name}`);

  // Local review leads the reviews grid; city section (issues + map) replaces the generic area section
  html = block(html, 'REVIEWS-FIRST', reviewCard(c));
  html = block(html, 'REVIEW-LAST', '');  // keep the grid at an even 4
  html = block(html, 'AREA', areaSection(c));
  html = block(html, 'FOOTER-AREA', `Serving ${c.name} and nearby cities`);

  // Pages live one folder deep — point shared assets back up to the root
  html = html.replace(/(src|href|content)="(brand_assets\/|styles\.css)/g, '$1="../$2');

  const outDir = path.join(ROOT, c.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`  /${c.slug}/`);
}

console.log('Building city pages:');
cities.forEach(buildCity);

// Directory of every landing page, so you can find them later (none are linked from the site)
const DOMAIN = 'https://callrooterchampion.com';
const rows = cities.map(c => `| ${c.name} | ${DOMAIN}/${c.slug}/ | \`${c.slug}/\` | ${c.zips.join(', ')} |`);
fs.writeFileSync(path.join(ROOT, 'LANDING-PAGES.md'), `# Landing pages

Auto-generated by \`node build-cities.mjs\` — don't edit by hand. To add a city, add it to
\`cities.mjs\` and rerun the build; it will show up here.

None of these pages are linked from the site. Each one is meant to be the final URL of a
Google Ads campaign targeting that city.

| Page | URL (use in Google Ads) | Folder | ZIPs |
|---|---|---|---|
| Main (LA & Orange County) | ${DOMAIN}/ | \`index.html\` | — |
${rows.join('\n')}
`);
console.log('  LANDING-PAGES.md updated');
