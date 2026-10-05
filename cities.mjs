// City landing pages — one entry per Google Ads location campaign.
// Add a city here, then run `node build-cities.mjs` to generate /<slug>/index.html.
// Text fields are HTML (use &amp; &rsquo; etc.).

export const cities = [
  {
    slug: 'la-habra',
    name: 'La Habra',
    county: 'Orange County',
    zips: ['90631'],
    eta: 'Our shop is right here at 1401 S Beach Blvd, so most La Habra homes are just a few minutes away',
    neighborhoods: ['Westridge', 'West La Habra', 'Beach Blvd', 'La Habra Blvd', 'Imperial Hwy', 'Downtown La Habra'],
    issues: [
      {
        title: 'Root intrusion in old clay lines',
        body: 'Roots from mature pepper trees, sycamores, and eucalyptus work into the joints of aging clay sewer lines. Recurring backups every few months are the classic sign.',
      },
      {
        title: 'Mid-century cast iron drains',
        body: 'Many La Habra tract homes from the 1950s &amp; &lsquo;60s still have original cast iron drains. Built-up scale narrows the pipe and catches grease, hair, and wipes.',
      },
      {
        title: 'Hillside sewer runs',
        body: 'Long, sloped sewer lines in Westridge and West La Habra can settle over time, leaving low spots where waste collects and slows the whole house down.',
      },
    ],
    review: {
      quote: 'Bryan is a professional who cares about your home. Our sink had a recurring drainage issue. Bryan and crew properly diagnosed it and got right to work. No more odor or gurgling. Thanks again!',
      name: 'Jimmy B.',
    },
  },
  {
    slug: 'fullerton',
    name: 'Fullerton',
    county: 'Orange County',
    zips: ['92831', '92832', '92833', '92835'],
    eta: 'We&rsquo;re usually 15 to 25 minutes from anywhere in Fullerton, and quicker if you&rsquo;re near the Brea border, downtown, or off the 57',
    neighborhoods: ['Sunny Hills', 'Raymond Hills', 'Amerige Heights', 'Downtown / Harbor &amp; Commonwealth', 'Cal State Fullerton area', 'The Foothills'],
    issues: [
      {
        title: 'Old pipes in historic homes',
        body: 'Downtown&rsquo;s 1920s Craftsman and Spanish Revival homes often still have cast iron drains and clay sewer laterals. Recurring backups are usually the first warning sign.',
      },
      {
        title: 'Roots under old sycamores &amp; oaks',
        body: 'Fullerton&rsquo;s tree-lined streets are beautiful, but roots find the cracks and joints in older clay sewer lines, especially in pre-1960s homes near downtown and Raymond Hills.',
      },
      {
        title: 'High-use drains in CSUF rentals',
        body: 'Rentals around Cal State Fullerton see heavy use. Wipes, grease, and hair build up fast, especially around tenant turnover.',
      },
    ],
    review: {
      quote: 'He was professional and knowledgeable, and he did what he said he would do. I would definitely call him back the next time I have a need.',
      name: 'Curtis B.',
    },
  },
  {
    slug: 'la-mirada',
    name: 'La Mirada',
    county: 'Los Angeles County',
    zips: ['90638'],
    eta: 'We&rsquo;re right next door in La Habra, so most La Mirada homes are 10 to 20 minutes away',
    neighborhoods: ['Imperial Hwy', 'Valley View Ave', 'Alondra Blvd', 'La Mirada Blvd', 'Biola University area', 'La Mirada Creek Park area'],
    issues: [
      {
        title: 'Aging &lsquo;50s and &lsquo;60s tract plumbing',
        body: 'Much of La Mirada was built out in the &lsquo;50s and &lsquo;60s. Original cast iron and clay lines are now 60+ years old, and scale, cracks and slow drains are common.',
      },
      {
        title: 'Root intrusion in sewer laterals',
        body: 'Mature street and yard trees send roots into the joints of older clay sewer laterals. If your main line backs up every few months, roots are a likely cause.',
      },
      {
        title: 'Kitchen grease buildup',
        body: 'Years of grease, food scraps, and soap scum harden inside older kitchen lines. A $55 cleaning clears the clog and the free camera shows what&rsquo;s left behind.',
      },
    ],
    review: {
      quote: 'Timely. Quick and efficient.',
      name: 'Yvonne C.',
    },
  },
  {
    slug: 'whittier',
    name: 'Whittier',
    county: 'Los Angeles County',
    zips: ['90601', '90602', '90603', '90604', '90605'],
    eta: 'We&rsquo;re just east in La Habra, so most Whittier homes are 15 to 25 minutes away',
    neighborhoods: ['Uptown Whittier', 'Friendly Hills', 'Whittier Hills', 'East Whittier', 'Whittier College area', 'Whittier Blvd corridor'],
    issues: [
      {
        title: 'Century-old pipes in Uptown',
        body: 'Uptown Whittier&rsquo;s older homes often still have original cast iron drains and clay sewer lines. Corrosion and offset joints lead to repeat clogs and slow drains.',
      },
      {
        title: 'Hillside sewer lines',
        body: 'Homes in Friendly Hills and the Whittier Hills have long, sloped sewer runs. Over time the ground shifts and lines can settle, sag, or separate.',
      },
      {
        title: 'Roots from mature trees',
        body: 'Whittier&rsquo;s established neighborhoods have big, old trees, and their roots work into aging sewer laterals, causing recurring backups.',
      },
    ],
    review: {
      quote: 'My toilet was backed up. David arrived on time, was polite and very professional. He explained everything he was doing and showed me the work after. Most affordable plumbing service I found. Highly recommend!',
      name: 'Daisy L.',
    },
  },
];
