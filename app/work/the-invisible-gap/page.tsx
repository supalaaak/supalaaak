'use client';

import React, { useState } from 'react';

// ── Reference definitions ──────────────────────────────────────────────────
const REFS = {
  linder_2021: {
    label: "Linder et al. (2021) – Dog Obesity and Owner BMI Correlation – Front Vet Sci",
    url: "https://doi.org/10.3389/fvets.2021.654617",
  },
  ritchie_roser: {
    label: "Ritchie & Roser – Obesity – Our World in Data (2024)",
    url: "https://ourworldindata.org/obesity",
  },
  nijland_2010: {
    label: "Nijland et al. (2010) – Overweight in dogs related to overweight in owners – Public Health Nutr",
    url: "https://doi.org/10.1017/S136898000999022X",
  },
  delicano_2020: {
    label: "Delicano et al. (2020) – Shared risk of diabetes between owners and pets – BMJ",
    url: "https://doi.org/10.1136/bmj.m4337",
  },
  pearl_2020: {
    label: "Pearl et al. (2020) – Veterinarian perceptions based on owner and pet weight – Int J Obes",
    url: "https://doi.org/10.1038/s41366-020-0622-7",
  },
  ppet_2019: {
    label: "PPET Study Group (2019) – Combined people and pet exercise program – Obesity (Silver Spring)",
    url: "https://doi.org/10.1002/oby.22569",
  },
  gbd_2019: {
    label: "Global Burden of Disease Study 2019 – IHME, Seattle",
    url: "https://www.healthdata.org/gbd",
  },
  apop_2022: {
    label: "Association for Pet Obesity Prevention – 2022 Pet Obesity Survey",
    url: "https://www.petobesityprevention.org/2022",
  },
  world_obesity: {
    label: "World Obesity Federation – Global Obesity Observatory Data Atlas",
    url: "https://data.worldobesity.org",
  },
  pubmed_baseline: {
    label: "NCBI PubMed Baseline Repository",
    url: "https://ftp.ncbi.nlm.nih.gov/pubmed/baseline/",
  },
  national_reading_panel: {
    label: "National Reading Panel – Report of the National Reading Panel (2000) – NICHD",
    url: "https://www.nichd.nih.gov/research/supported/nrp",
  },
  german_nutrition: {
    label: "German Nutrition Society – Evidence-based dietary guidelines",
    url: "https://www.dge.de/en/",
  },
};

// ── Small helper: inline reference link ───────────────────────────────────
function Ref({ id, children }: { id: keyof typeof REFS; children?: React.ReactNode }) {
  const ref = REFS[id];
  return (
    <a
      href={ref.url}
      target="_blank"
      rel="noopener noreferrer"
      title={ref.label}
      className="inline-flex items-baseline gap-[2px] text-black/50 hover:text-black border-b border-dashed border-black/30 hover:border-black transition-colors text-[11px] font-mono leading-none mx-[2px] align-baseline"
    >
      {children ?? `[src]`}
    </a>
  );
}

// ── Footnotes component (bottom of page) ──────────────────────────────────
function Footnotes() {
  const entries = Object.entries(REFS);
  return (
    <section className="mt-20 pt-8 border-t border-black/10">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 mb-6">En</h2>
      <ol className="space-y-2">
        {entries.map(([, ref], i) => (
          <li key={i} className="flex gap-3 text-[11px] font-mono text-black/40 leading-relaxed">
            <span className="shrink-0">{i + 1}.</span>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors break-all"
            >
              {ref.label} — <span className="underline underline-offset-2">{ref.url}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── English content ────────────────────────────────────────────────────────
function EnglishContent() {
  return (
    <article className="space-y-20">

      {/* ── Investigative Opening ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            00 // The Gap We Found
          </h2>
        </div>
        <div className="md:col-span-8 text-lg font-light leading-relaxed text-gray-700 space-y-5">
          <p>
            In the course of assembling 11,394 peer-reviewed papers on diet and obesity from PubMed,
            a pattern emerged that was impossible to ignore:{' '}
            <strong className="font-semibold text-black">
              the two largest bodies of nutrition literature on the planet—human and companion animal—have
              been running on parallel tracks for decades, almost never looking at each other.
            </strong>
          </p>
          <p>
            Both fields debate endlessly within their own walls. Human nutritionists argue over
            low-carbohydrate versus low-fat, Mediterranean versus ketogenic, caloric restriction
            versus time-restricted feeding. Veterinary nutritionists clash over high-protein
            formulations versus high-fiber prescriptions, therapeutic diets versus commercial weight
            management kibble. The internal debates are fierce, well-funded, and highly published.
          </p>
          <div className="bg-gray-50 border-l-2 border-black p-8 text-sm text-gray-600 italic">
            "Of the 11,394 papers analyzed in this bibliometric study, only{' '}
            <strong className="text-black not-italic">105 addressed companion animal weight management</strong>
            —a fraction of less than 1%—and of those 105, the number that explicitly compared findings
            against parallel human literature is{' '}
            <strong className="text-black not-italic">
              vanishingly small.
            </strong>
            {' '}This is not a niche gap. It is a structural blind spot in global nutrition science."
          </div>
          <p>
            This page investigates why that gap exists, what it costs us, and what a genuine
            cross-species comparative framework might reveal.
          </p>
        </div>
      </section>

      {/* ── 01 The Parallel Epidemics ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            01 // Two Epidemics, One Household
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            By 2030, projections suggest approximately 78% of American adults will be overweight or
            obese.
            <Ref id="linder_2021">[Linder 2021]</Ref>{' '}
            Simultaneously, canine obesity has risen from 34.1% in 1995 to over 50% in recent surveys,
            while 61% of cats are now classified as overweight or obese.
            <Ref id="apop_2022">[APOP 2022]</Ref>{' '}
            In 2019, obesity-related conditions contributed to approximately 5 million human deaths
            globally.
            <Ref id="gbd_2019">[GBD 2019]</Ref>
          </p>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The correlation is not merely statistical coincidence. Research has documented a
            significant positive relationship (r = 0.60, p &lt; 0.001) between owner Body Mass Index
            and their dogs' body condition scores,
            <Ref id="linder_2021">[Linder 2021]</Ref>{' '}
            and a separate register-based cohort study found{' '}
            <strong className="font-semibold text-black">
              shared diabetes risk between dog and cat owners and their animals
            </strong>—not genetically, but environmentally.
            <Ref id="delicano_2020">[Delicano 2020]</Ref>
          </p>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The shared household—shared food culture, shared sedentary routines, shared emotional
            eating patterns—acts as a common environment that shapes both the owner's and the
            pet's metabolic trajectory. Yet nutrition research continues to treat these two
            populations as if they occupy different planets.
          </p>

          {/* Data callout */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { stat: "50%+", label: "dogs now classified overweight or obese", src: "apop_2022" as keyof typeof REFS, srcLabel: "[APOP 2022]" },
              { stat: "61%", label: "cats classified overweight or obese", src: "apop_2022" as keyof typeof REFS, srcLabel: "[APOP 2022]" },
              { stat: "r = 0.60", label: "correlation between owner BMI and dog body condition score", src: "linder_2021" as keyof typeof REFS, srcLabel: "[Linder 2021]" },
            ].map((item, i) => (
              <div key={i} className="border border-black/10 p-5">
                <p className="text-3xl font-light text-black mb-1">{item.stat}</p>
                <p className="text-xs text-gray-500 font-light leading-snug">
                  {item.label}
                  <Ref id={item.src}>{item.srcLabel}</Ref>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 The Internal Wars ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            02 // The Internal Wars
          </h2>
        </div>
        <div className="md:col-span-8 space-y-8">

          <p className="text-lg font-light leading-relaxed text-gray-700">
            Within each field, the debates are anything but quiet. The problem is they have been
            raging for so long, in such separate arenas, that neither side has paused to ask whether
            the other might have already found an answer.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
                [ Human Nutrition: The Macro Wars ]
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base">
                From 2010 to 2023, the human weight management literature was dominated by internal
                conflict over macronutrient ratios. Low-carbohydrate research surged after 2019,
                reaching over 100 papers annually, while low-fat advocates argued their approach
                remained clinically superior for cardiovascular outcomes. The ketogenic camp split
                from the broader low-carbohydrate movement. Intermittent fasting and time-restricted
                feeding entered as a third front. Mediterranean diet proponents cited adherence
                advantages. Meanwhile, the fundamental question—
                <strong className="text-black font-semibold">
                  whether caloric restriction is the mechanism or merely the vehicle—
                </strong>
                remained unresolved. 9,994 papers later, no single dietary paradigm has won.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
                [ Veterinary Nutrition: The Protein-Fiber Standoff ]
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base">
                The companion animal literature, operating at a fraction of the scale (105 studies),
                has its own unresolved argument. High-protein formulations appeared in 20% of pet
                weight management studies—nearly three times the rate seen in human literature
                (6.99%)—driven by the logic that protein spares lean muscle during caloric restriction
                and increases satiety. High-fiber approaches appeared in 17.89% of pet studies,
                largely absent from human weight loss literature at that proportion. The veterinary
                debate is whether{' '}
                <strong className="text-black font-semibold">
                  the satiety advantage of fiber outweighs its interference with nutrient absorption
                </strong>
                —a question that human nutrition researchers have raised for years without resolution,
                and that veterinary researchers are now rediscovering independently.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border-l-2 border-black p-8 text-sm text-gray-600 italic">
            "The irony is documented in the data:{' '}
            <strong className="text-black not-italic">
              both fields converge on caloric restriction as the dominant intervention
            </strong>{' '}
            (48.84% human, 55.79% pet studies), yet neither field has systematically studied
            whether the mechanisms by which caloric restriction produces weight loss are
            identical across species—or whether they differ in ways that could inform both fields."
          </div>
        </div>
      </section>

      {/* ── 03 The Structural Blind Spot ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            03 // Why Comparative Studies Are Rare
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The absence of cross-species comparative nutrition research is not accidental. It is
            the product of structural forces that have kept the two fields apart since their
            modern foundations were established.
          </p>

          <ol className="space-y-5 text-base text-gray-600 font-light leading-relaxed">
            {[
              {
                n: "01",
                title: "Separate Funding Ecosystems",
                body: "Human nutrition research draws from public health budgets, NIH grants, and pharmaceutical-adjacent funding. Veterinary nutrition research is overwhelmingly funded by commercial pet food manufacturers. The incentive structures are different; the review bodies are different; the journals rarely overlap.",
              },
              {
                n: "02",
                title: "The Species-Assumption Problem",
                body: "Researchers in both fields implicitly assume their findings are species-specific. A human clinical trial on low-carbohydrate diets does not list \"translation to canine metabolism\" as a research objective. A veterinary feeding trial on high-fiber formulations does not reference the parallel human literature on gut microbiome and satiety. The comparison is nobody's job.",
              },
              {
                n: "03",
                title: "Publication Silo Architecture",
                body: "The major journals in each field—JAMA Internal Medicine, The Lancet for human nutrition; Journal of Veterinary Internal Medicine, Journal of Nutritional Science for veterinary—do not routinely commission cross-species comparative reviews. Bibliometric analysis confirms this: pet studies comprise 0.92% of identified papers in this dataset, and cross-citation rates between human and veterinary weight management literature are extremely low.",
              },
              {
                n: "04",
                title: "Methodological Incommensurability",
                body: "Pet studies show a higher proportion of experimental designs (60.95% vs. 44.00% in human studies)—largely because it is possible to control diet precisely in a feeding trial environment. Human studies rely heavily on self-reporting. This methodological gap has made direct comparison difficult, even for researchers who wanted to attempt it.",
              },
              {
                n: "05",
                title: "Scale Disparity as a Self-Fulfilling Prophecy",
                body: "With 9,994 human studies versus 105 companion animal studies in the same time window, the statistical power for any cross-species meta-analysis is inherently limited. This makes funding bodies reluctant to invest in comparative work, which keeps the pet literature small, which makes comparative work harder. The cycle has continued for over a decade.",
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-4">
                <span className="shrink-0 font-mono text-[10px] text-black/30 pt-1">{item.n}.</span>
                <div>
                  <p className="font-semibold text-black text-sm mb-1">{item.title}</p>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 04 What Cross-Species Data Reveals ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            04 // What the Data Actually Shows
          </h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            When the two bodies of literature are placed side by side—as this bibliometric study
            does—several patterns emerge that neither field has been forced to confront in isolation.
          </p>

          <div className="space-y-5">
            {[
              {
                heading: "High-Protein Research: Humans Under-Investigate What Pets Over-Investigate",
                body: "High-protein dietary intervention appears in 6.99% of human weight management studies and 20.00% of companion animal studies. This is not a small difference. Veterinary nutritionists have accumulated substantially more experimental data on high-protein weight loss relative to their total research volume than human nutritionists have. If protein-sparing of lean mass during caloric restriction is the mechanism of interest, the veterinary literature may contain controlled experimental evidence that human observational studies cannot produce due to ethical constraints.",
                flag: "SIGNAL",
              },
              {
                heading: "Behavioral Interventions: The Largest Gap",
                body: "Exercise and lifestyle modifications appear in 61.78% and 62.88% of human weight management studies respectively. In companion animal studies, the equivalent figures are 46.15% for exercise and 57.69% for lifestyle. The most striking absence: psychological interventions appear in 12.47% of human studies and 0.00% of pet studies. This is not simply because pets cannot attend therapy. It reflects a failure to investigate the owner's psychological state as a variable in pet weight management outcomes—despite documented correlations between owner and pet obesity.",
                flag: "GAP",
              },
              {
                heading: "Study Design Asymmetry as an Untapped Resource",
                body: "Pet studies produce experimental designs at a rate 17 percentage points higher than human studies. The irony is that the field with the smaller literature has the higher-quality experimental infrastructure. Human nutrition researchers frequently cite the ethical impossibility of controlled feeding trials as a limitation. Those controlled trials exist—in veterinary research. The mechanisms they document may generalize across species in ways that have never been formally tested.",
                flag: "ASYMMETRY",
              },
              {
                heading: "Comorbidity Research: A Missing Dimension in Veterinary Medicine",
                body: "Human weight management studies examine multiple comorbid conditions in 54.9% of cases. The equivalent figure for pet studies is 19.0%. This means the downstream effects of obesity—cardiovascular disease, diabetes, metabolic syndrome, mental health impacts—are systematically understudied in the companion animal population. Given the documented correlations between owner and pet metabolic health, this gap has implications for human health research as well.",
                flag: "RISK",
              },
            ].map((item, i) => (
              <div key={i} className="border border-black/10 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 font-mono text-[9px] text-white bg-black px-2 py-[3px] tracking-widest mt-[2px]">
                    {item.flag}
                  </span>
                  <p className="font-semibold text-black text-sm leading-snug">{item.heading}</p>
                </div>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 The Owner as Bridge ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            05 // The Owner as the Missing Variable
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg font-light leading-relaxed text-gray-700">
          <p>
            The most consequential finding that cross-species analysis surfaces is one that neither
            field has adequately addressed: the{' '}
            <strong className="font-semibold text-black">owner is both a human subject and a veterinary variable</strong>,
            yet no study in our dataset treats them as both simultaneously.
          </p>
          <p>
            The People and Pets Exercising Together (PPET) Study is one of the few documented
            interventions targeting both populations concurrently. Its findings—that a combined
            human-and-dog exercise program produced meaningful reductions in body weight and
            cardiovascular risk factors for both species
            <Ref id="ppet_2019">[PPET 2019]</Ref>—point toward a research design that the
            broader literature has almost entirely ignored.
          </p>
          <p>
            Owner perception is a documented confounding variable: 36% of dog owners and 28% of
            cat owners misclassify their overweight animals as having a normal body weight.
            <Ref id="apop_2022">[APOP 2022]</Ref>{' '}
            Veterinary weight management outcomes are fundamentally constrained by owner behavior.
            Owner weight management outcomes are influenced by household food culture.
            <strong className="font-semibold text-black">
              {' '}The intervention that addresses one may, by design, affect the other.
            </strong>
            {' '}This hypothesis has not been tested at scale.
          </p>
          <p>
            Research has also documented that veterinarians modify their clinical recommendations
            based on owner weight status—a bias documented in at least one peer-reviewed study
            <Ref id="pearl_2020">[Pearl 2020]</Ref>—meaning that human obesity is already
            influencing veterinary care, invisibly, without being named as a variable.
          </p>
        </div>
      </section>

      {/* ── 06 Geography ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            06 // Geography of the Blind Spot
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The geographical concentration of both bodies of literature adds another layer to the
            problem. The United States produced 4,664 human weight management studies and 42
            companion animal studies—the largest output in both categories. The United Kingdom
            produced 2,203 human studies and 36 companion animal studies. Together, these two
            countries account for over 68% of human weight management research output.
          </p>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            This concentration means the comparative gap is not only a gap between fields—it is
            also a gap between populations. Weight management research, in both human and
            veterinary contexts, overwhelmingly reflects high-income, Western dietary patterns,
            feeding infrastructures, and healthcare delivery models.{' '}
            <strong className="font-semibold text-black">
              The world's fastest-growing obesity populations—in South and Southeast Asia,
              Sub-Saharan Africa, Latin America—are represented in neither literature
              at proportional rates.
            </strong>
            <Ref id="world_obesity">[World Obesity Federation]</Ref>
          </p>

          {/* Country comparison table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-xs border border-black/10 text-left">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-3 py-2 font-mono font-medium">Country</th>
                  <th className="px-3 py-2 font-mono font-medium">Human Studies</th>
                  <th className="px-3 py-2 font-mono font-medium">Pet Studies</th>
                  <th className="px-3 py-2 font-mono font-medium">Ratio H:P</th>
                  <th className="px-3 py-2 font-mono font-medium">Obesity Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: "United States", human: 4664, pet: 42, obesity: "42.74%", src: "world_obesity" },
                  { country: "United Kingdom", human: 2203, pet: 36, obesity: "27.63%", src: "world_obesity" },
                  { country: "Switzerland", human: 787, pet: 7, obesity: "12.47%", src: "world_obesity" },
                  { country: "Germany", human: 266, pet: 6, obesity: "~22%", src: "world_obesity" },
                  { country: "Japan", human: 48, pet: 3, obesity: "~4%", src: "world_obesity" },
                  { country: "New Zealand", human: 74, pet: 1, obesity: "~32%", src: "world_obesity" },
                ].map((row, i) => {
                  const ratio = Math.round(row.human / (row.pet || 1));
                  return (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 font-semibold border-r border-black/10 text-black">{row.country}</td>
                      <td className="px-3 py-2 border-r border-black/10 font-mono">{row.human.toLocaleString()}</td>
                      <td className="px-3 py-2 border-r border-black/10 font-mono">{row.pet}</td>
                      <td className="px-3 py-2 border-r border-black/10 font-mono text-black/50">{ratio}:1</td>
                      <td className="px-3 py-2 font-mono">{row.obesity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="text-[10px] text-gray-400 italic mt-2 font-mono">
              * Obesity rates sourced from World Obesity Federation Data Atlas.
              <Ref id="world_obesity">[World Obesity Federation]</Ref>{' '}
              Human:Pet ratio indicates papers per country—higher ratios signal a larger comparative gap.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07 What a Comparative Framework Would Look Like ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            07 // What a Comparative Framework Requires
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The data points toward what genuine cross-species nutrition research would need to
            address—and what makes it harder than it sounds.
          </p>

          <div className="space-y-4">
            {[
              {
                label: "Shared Outcome Measurement Standards",
                body: "Human studies measure BMI, waist circumference, DEXA body composition, fasting glucose, lipid panels. Veterinary studies use body condition scores (BCS), morphometric measurements, and body fat percentage via DEXA. No standardized crosswalk between these measurement systems currently exists. A comparative framework requires one.",
              },
              {
                label: "Mechanistic Studies Across Species",
                body: "The fundamental question—whether caloric restriction produces weight loss through the same metabolic pathways in dogs, cats, and humans—has not been systematically answered. Comparative physiology exists as a field, but it has not been brought to bear on obesity intervention mechanisms at scale.",
              },
              {
                label: "Longitudinal Owner-Pet Cohort Studies",
                body: "An intervention study that enrolls owners and pets simultaneously, measures outcomes in both, and treats the household as the unit of analysis does not yet exist in peer-reviewed literature. The PPET study is the closest precedent. It has not been replicated or expanded.",
              },
              {
                label: "Cross-Citation Incentive Architecture",
                body: "Journal editors, grant reviewers, and funding bodies would need to begin treating cross-species citation as methodologically relevant rather than merely interesting. Without structural incentives, researchers have no professional reason to look across the boundary.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-black/20 pl-5 py-1">
                <p className="font-semibold text-black text-sm mb-1">{item.label}</p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conclusion ── */}
      <section className="border border-black/10 p-12 bg-black text-white">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] mb-8 opacity-50">Finding</h2>
        <p className="text-2xl font-light leading-relaxed italic text-gray-300 mb-6">
          Two of the most urgent public health crises of the 21st century—human and companion
          animal obesity—share a household, share environmental risk factors, share a correlated
          metabolic trajectory, and are studied by researchers who almost never read each other's
          work. The debate within each field is vigorous. The conversation between them has
          barely begun.
        </p>
        <p className="text-sm font-light text-gray-400 leading-relaxed">
          The 105 companion animal studies identified in our dataset over 13 years represent not a
          small field—they represent a missed opportunity for the 9,994 human studies that ran in
          parallel. Controlled experimental data that human researchers could not ethically produce
          was being generated in veterinary settings. Most of it was never read by human
          nutritionists. That is the structural cost of the silo.
          <a
            href={REFS.pubmed_baseline.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-gray-400 hover:text-white transition-colors text-xs font-mono ml-2"
          >
            [PubMed Baseline]
          </a>
        </p>
      </section>

    </article>
  );
}


// ── Page ──────────────────────────────────────────────────────────────────
export default function ComparativeStudyPage() {

  const meta = {
    en: {
      tag: "Field Intelligence // Nutrition Science",
      title: "The Invisible Gap: Human and Pet Nutrition Science",
      desc: "An analysis of 11,394 papers reveals why human and veterinary nutritionists have spent decades missing each other's answers.",
    },
  };

  const active = meta['en'];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-8 py-12 flex justify-between items-center border-b border-black/10">
        <a
          href="/work"
          className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/50 hover:text-black transition-colors"
        >
          &larr;  Return to Work Index
        </a>

      </nav>

      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <header className="mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 mb-6 block">
            {active.tag}
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-black mb-8 leading-tight">
            {active.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
            {active.desc}
          </p>
          {/* Meta line */}
          <div className="mt-8 flex gap-6 text-[10px] font-mono text-black/30 uppercase tracking-widest">
            <span>Dataset: 11,394 Papers</span>
            <span>//</span>
            <span>Period: 2010–2023</span>
            <span>//</span>
            <span>Source: PubMed</span>
          </div>
        </header>

        {/* Main content, toggled by language */}
        <EnglishContent />

        {/* Footnotes */}
        <Footnotes/>

        {/* Footer */}
        <footer className="mt-16 pt-12 border-t border-black/5 flex justify-between items-center text-[9px] font-mono text-gray-400 uppercase tracking-[0.4em]">
          <span>Case ID: 2026-NUT-COMPARATIVE</span>
          <span className="animate-pulse text-black/20">EOD_SIGNAL_STABLE</span>
        </footer>
      </div>
    </main>
  );
}