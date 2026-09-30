# Rules for pictures and videos

Agreed with the lecturer on 29.09.2026. The researcher agent, the propose step and the apply step all follow this file.

## 1. When a picture earns its place

Only where a photo shows something a diagram cannot:

- real equipment and its scale (a BESS container, a gas holder with its flare, a nacelle, a string inverter);
- markings and labels as they look in the field (Ex marking, a PV warning label, a gas detector's display);
- damage and consequences (a burned container, a failed blade, a digester roof after a failure);
- a place or situation the students have not seen (inside a container, a turbine tower, a control room).

Not: decoration, stock photos ("engineer in a helmet"), logos, product shots for their own sake, AI-generated images, screenshots of articles, charts copied from papers (redraw the data as a visual instead, with the source).

Every candidate comes with one sentence **"Czego uczy"**: what the student learns from it. If you cannot write that sentence, drop the candidate.

## 2. When a video earns its place

- motion or a process that a still cannot show (thermal runaway propagation, a flare start, blade icing and ice throw, an arc);
- a real test or incident with a credible source (fire tests, investigations with footage);
- an expert demonstration or explanation that adds to the slide (not one that repeats it).

Not: talking heads repeating the slide, advertising, compilations and re-uploads (find the original channel), videos without a named source.

**Length: no limit** (lecturer's decision, 29.09.2026). A longer video is fine when it is relevant. Propose a fragment (`start`/`end`) when the content can be located from chapters, a transcript or the description; otherwise mark the fragment "do ustalenia po obejrzeniu". The apply step adds the fragment's time to the slide's "Czas" and reports the new lecture total; it does not cut anything to stay within 90 minutes.

## 3. Where to look

Pictures, in this order:

1. **Wikimedia Commons**: `node _wizualizacje/tools/commons.mjs search "<query>"` (search in English, German and Polish: "biogas flare", "Biogasanlage Fackel", "biogazownia"). The tool returns licence, author and a preview URL.
2. **US federal agencies**: works of federal employees are public domain in the USA (e.g. CSB, OSHA, NIST, NASA, FEMA, USGS). Check each photo: some are credited to third parties and are not public domain. NREL images are not automatically public domain (NREL is run by a contractor): read the image's terms.
3. **Unsplash, Pexels**: free licences (attribution optional; give it anyway). Rarely useful for technical subjects.
4. **Openverse** (openverse.org): a search over CC-licensed images; always confirm the licence on the original page.
5. Everything else (fire service, manufacturers, news, papers): **link only** (`MediaLink`).

Videos, prefer:

- official bodies: US Chemical Safety Board (CSB, public domain videos), UL Solutions and UL Research Institutes (FSRI), NFPA, HSE, NREL, EPRI, DNV, Fraunhofer ISE, Państwowa Straż Pożarna (KG PSP and regional commands), CIOP-PIB, UDT, URE;
- universities and research groups;
- manufacturers' technical demonstrations (not adverts);
- reputable news reports, for real incidents only.

Prefer Polish when the content is equivalent; otherwise English with Polish or English captions. Note the language.

## 4. Licence status

| Licence | Status | What the apply step does |
|---|---|---|
| CC0, public domain (PD-self, PD-USGov without third-party credit, PD-old) | `wolna` | download to `img/`, `Figure` with attribution |
| CC BY, CC BY-SA (any version) | `wolna` | same; keep the picture unmodified except resizing |
| Unsplash licence, Pexels licence | `wolna` | same |
| CC BY-ND | `do sprawdzenia` | link by default; embedding allowed only unmodified (no cropping) if the lecturer decides |
| CC BY-NC, BY-NC-SA, BY-NC-ND | `do sprawdzenia` | link by default; the lecturer decides whether the public course site counts as non-commercial |
| GFDL only, Free Art License, other | `do sprawdzenia` | link by default |
| "free for editorial use", press kits, manufacturer or news photos, all rights reserved, unknown | `niewolna` | `MediaLink` only |

- Commons hosts only free files, but its metadata can be incomplete: the researcher opens the file page of every candidate it proposes, and the apply step checks the licence again (`commons.mjs info`) before downloading.
- Record the date of every licence check (claims ledger row, see the apply skill).
- The public course website is not a closed learning environment, so this process relies on licences, not on the teaching exception of the Polish copyright act (art. 27 ustawy o prawie autorskim i prawach pokrewnych). This is a working rule, not legal advice.

## 5. Attribution

`Figure` prints: "Fot. {author}, {licence with link}, źródło: {source with link}", or "Materiał własny". This covers title, author, source and licence (the TASL rule of Creative Commons).

- `author`: as the file page gives it (plain text, no HTML).
- `license`: short name ("CC BY-SA 4.0", "domena publiczna"), `licenseUrl`: the licence deed.
- `source`: "Wikimedia Commons" (or the agency), `sourceUrl`: the file page.
- Do not crop, recolour or add text to CC BY-ND pictures; for other licences say "zmodyfikowano" in the caption if you crop.

## 6. Videos

- Embed through the official player only (`Video`: youtube-nocookie.com, loaded after a click), and only when embedding is enabled (`node _wizualizacje/tools/video.mjs <id>` → `embeddable: "tak"`). If embedding is disabled: `MediaLink kind="film"`.
- Never download, cut or re-upload a video.
- Fragments through `start`/`end`.
- Every video goes onto a lecture page with `watched={false}`. The lecturer removes it after watching the fragment; until then `npm start` shows the badge "Nieobejrzany" and `check-page.mjs --final` lists the video.
- Timing: the fragment's length, rounded up to 0,5 min, is added to the slide's "Czas" as "Czas: ~N min (w tym film ~X min)". Videos in "Dla chętnych" add no time.

## 7. Accessibility

- `alt`: Polish, what is visible, written after looking at the downloaded picture (not copied from the file title).
- `caption`: one sentence, what to notice.
- Videos: language in `lang`; mention Polish captions if the video has them.

## 8. Never

- invent a file name, a video id, an author or a URL (only what a search result or a tool returned);
- embed a picture that is not `wolna` without the lecturer's explicit decision;
- hotlink a picture on a lecture page (review pages only);
- present an illustrative or AI-generated image as a real photo.
