export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole?: string;
  featured?: boolean;
  /**
   * Article body as an ordered list of blocks.
   * Prefix "## " for a subheading, "> " for a pull quote, otherwise a paragraph.
   */
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-estimates-drift-after-ground-break",
    title: "Why estimates drift the moment a project breaks ground",
    excerpt:
      "Most budget overruns don't come from one bad decision — they come from a design change three weeks in that never made it back to the estimate.",
    category: "Estimating",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    author: "Amina Kariuki",
    authorRole: "Principal, Kariuki Builds",
    featured: true,
    content: [
      "Ask most contractors when a budget actually starts to break, and they won't point to the day the estimate was written. They'll point to a Tuesday three weeks into the build, when a client asked for a different window layout and nobody updated the quantity survey to match.",
      "## The gap between design and cost",
      "A traditional workflow treats the floor plan, the estimate, and the procurement list as three separate documents, produced by three different people, on three different timelines. Each one is accurate the day it's created. None of them stay accurate for long.",
      "The floor plan changes because a client wants more natural light. The estimate doesn't hear about it until the next scheduled review. By the time it does, materials have already been ordered against the old plan, and the gap between what's costed and what's being built has quietly widened.",
      "> The estimate isn't wrong on day one. It's wrong on day twelve, and nobody notices until the invoice arrives.",
      "## Why this is structural, not a discipline problem",
      "It's tempting to frame this as a communication failure — someone should have sent an email. But the real issue is structural: there's no single source of truth that the design, the estimate, and the purchase orders all read from. Every update requires someone to manually propagate a change across systems that don't talk to each other.",
      "This is exactly the problem we built VECAI's project graph to solve. When a room dimension changes in the Architect Workspace, the Quantity Survey recalculates automatically, and any open supplier quotes are flagged for review rather than silently going stale.",
      "## What to check if you're not using a connected system",
      "If you're running a project the traditional way, the highest-leverage habit is a standing weekly reconciliation: pull the latest drawings, re-check the last quantity survey against them, and flag any variance before it compounds. It's not as fast as automatic propagation, but it catches the drift while it's still cheap to fix.",
    ],
  },
  {
    slug: "reading-a-quantity-survey",
    title: "How to read a quantity survey like an estimator",
    excerpt:
      "A line-by-line guide to what's actually in a QS document, and which lines are worth double-checking before you sign off.",
    category: "Estimating",
    date: "Jul 21, 2026",
    readTime: "6 min read",
    author: "Daniel Otieno",
    authorRole: "Project Manager, Otieno Construction",
    content: [
      "A quantity survey looks intimidating the first time you open one — pages of line items, units you don't recognize, and numbers that don't obviously add up to the total at the bottom. Most of that complexity is just structure once you know what to look for.",
      "## Start with the grouping, not the line items",
      "Every QS is organized into work sections — substructure, superstructure, finishes, MEP, and so on. Before reading a single line item, check that the sections match the scope you agreed to. A missing section is a far more common problem than a wrong number inside one.",
      "## The lines worth double-checking",
      "Three categories of line items are disproportionately likely to be wrong or optimistic: provisional sums (placeholder costs for work not yet fully specified), contingency percentages that are lower than the project's actual risk profile, and any material priced at a rate that hasn't been checked against a current supplier quote in the last few weeks.",
      "> If a provisional sum makes up more than 10% of the total, treat the estimate as a range, not a number.",
      "## Reading quantities against the drawings",
      "Pick two or three line items — say, concrete volume and roofing area — and manually verify them against the drawings using rough hand calculations. You're not trying to replicate the full survey, just confirm the methodology is sound. If your rough numbers are within 5-10% of the document, the rest of the survey is probably trustworthy.",
      "This is the check VECAI's Quantity Survey runs automatically on every generated estimate, cross-referencing computed quantities against the underlying floor plan geometry before a number ever reaches you.",
    ],
  },
  {
    slug: "supplier-marketplace-launch-notes",
    title: "Inside the supplier marketplace launch",
    excerpt:
      "What it took to verify 1,900 suppliers, and the pricing signals we use to flag a quote that looks off.",
    category: "Product",
    date: "Jul 14, 2026",
    readTime: "5 min read",
    author: "VECAI Team",
    content: [
      "Verifying 1,900 suppliers wasn't a matter of collecting business registrations and calling it done. Every supplier on the marketplace went through a three-step check: business registration and tax compliance, references from at least two completed deliveries, and a pricing sanity check against regional benchmarks.",
      "## Why pricing verification matters more than paperwork",
      "A supplier can have flawless paperwork and still submit a quote that's wildly out of line with the market — sometimes underpriced to win volume and cut corners later, sometimes overpriced hoping a buyer won't check. Neither is caught by registration checks alone.",
      "We built a benchmarking layer that compares every submitted quote against a rolling regional average for that material and quantity. Quotes more than two standard deviations from the benchmark get flagged for manual review before they're shown to a buyer.",
      "> A quote that looks too good is the one worth checking first, not the one to celebrate.",
      "## What buyers see differently now",
      "Instead of a flat list of suppliers, the marketplace now surfaces a confidence indicator alongside each quote — built from delivery history, price consistency, and response time. It doesn't replace your own judgment, but it does mean you're not starting from zero on every supplier you haven't worked with before.",
      "## What's next",
      "We're extending the same verification pipeline to equipment rental and specialty labor listings over the next two quarters, using the same three-step model that got the materials marketplace to where it is today.",
    ],
  },
  {
    slug: "architect-workspace-v2",
    title: "Architect Workspace v2: live budget feedback",
    excerpt:
      "Every edit to a floor plan now recalculates cost in real time. Here's how we built it, and what it changes for design reviews.",
    category: "Product",
    date: "Jul 3, 2026",
    readTime: "4 min read",
    author: "VECAI Team",
    content: [
      "The first version of Architect Workspace generated a floor plan, and you'd send it to Quantity Survey to find out what it cost. That round trip took minutes, which was fast compared to a traditional workflow, but it still meant every design decision was made blind to its budget impact.",
      "## Recalculating on every edit",
      "Version 2 keeps a lightweight cost model running inside the workspace itself. Resize a room, add a wall, or swap a roofline, and the budget estimate in the corner of the screen updates within a second — not a full quantity survey, but close enough to guide a decision in the moment.",
      "> The full quantity survey is still the source of truth. The live estimate is there so you don't find out you're over budget after the fact.",
      "## What this changes for design reviews",
      "Client meetings that used to end with 'let me get you a number by Friday' can now end with a number on the screen. Early usage data shows design revisions per project dropping by roughly a third, largely because budget-driven changes get made in the first session instead of after a client sees a formal estimate days later.",
      "## What's still manual",
      "Live estimates don't yet account for site-specific factors like difficult access or unusual soil conditions — those still route through the full Quantity Survey. Treat the live number as a strong directional guide, not a final quote.",
    ],
  },
  {
    slug: "grace-mwangi-studio-workflow",
    title: "How Studio Mwangi runs client meetings with a live plan",
    excerpt:
      "An architect's workflow for turning a first conversation into a floor plan and a number before the client leaves the room.",
    category: "Customer stories",
    date: "Jun 25, 2026",
    readTime: "8 min read",
    author: "Grace Mwangi",
    authorRole: "Architect, Studio Mwangi",
    content: [
      "Grace Mwangi runs a four-person architecture studio in Nairobi, and for years her first client meeting followed the same script: listen, sketch by hand, and promise a proper floor plan within a week. Clients would leave with an idea, not a plan — and a fair number never came back once the excitement of the first conversation faded.",
      "## Building the plan while the client is still in the room",
      "Now Grace runs the AI Consultant live during the first meeting. As the client describes what they want, she feeds the key details in — plot size, budget, room count — and has a first-draft floor plan on screen within the same conversation.",
      "> Clients don't remember the sketch a week later. They remember the plan they watched get built in front of them.",
      "## Where the studio's expertise still matters most",
      "The AI draft isn't the deliverable — it's the starting point for the conversation that used to happen a week later, except now it happens immediately, while the client's preferences are still fresh. Grace and her team spend the follow-up week refining details the AI draft can't know yet: how the client actually uses a kitchen, which room gets morning light, where the family gathers.",
      "## The number that changed client behavior most",
      "Client conversion from first meeting to signed contract rose meaningfully once a budget number was part of the first conversation instead of arriving days later in an email. People commit faster to a plan they've already seen priced.",
    ],
  },
  {
    slug: "compliance-checks-in-design",
    title: "Catching compliance gaps during design, not inspection",
    excerpt:
      "Regional building codes change more often than most teams track. Here's what we check automatically, and what still needs a human.",
    category: "Compliance",
    date: "Jun 12, 2026",
    readTime: "6 min read",
    author: "VECAI Team",
    content: [
      "A compliance gap caught at inspection costs far more than one caught at the drawing stage — in rework, in delay, and occasionally in a redesign of a whole section of a building. Most gaps aren't dramatic code violations; they're small, easy-to-miss details like a setback measured from the wrong property line or a stairwell width that's a few centimeters short.",
      "## What gets checked automatically",
      "Every plan generated in Architect Workspace is checked against the zoning and building code rules for its registered region — setback distances, minimum room dimensions, stairwell and corridor widths, and basic fire egress requirements. Flags appear directly on the plan, at the wall or room they relate to, rather than in a separate report nobody opens.",
      "> Catching a setback violation during design costs an edit. Catching it during a site visit costs a permit delay.",
      "## What still needs a human",
      "Automated checks cover code text that's structured and consistent — but discretionary approvals, heritage or conservation area rules, and anything requiring a site-specific variance still need a local professional's judgment. We're explicit about this in the product: flagged items are marked as either 'automated check' or 'recommend professional review,' so it's never ambiguous which is which.",
      "## Keeping the rule sets current",
      "Regional code updates are reviewed quarterly, with an expedited update process for known high-change jurisdictions. If a rule set is out of date, the platform shows the last verified date next to the compliance panel — we'd rather show that than a stale check with no caveat.",
    ],
  },
  {
    slug: "material-price-volatility-2026",
    title: "What material price volatility looked like in H1 2026",
    excerpt:
      "Steel, cement, and timber pricing trends across East Africa, and what they mean for estimates going into the second half of the year.",
    category: "Market",
    date: "Jun 2, 2026",
    readTime: "9 min read",
    author: "Daniel Otieno",
    authorRole: "Project Manager, Otieno Construction",
    content: [
      "Every quantity survey carries an implicit bet on where material prices will sit by the time construction actually happens. In the first half of 2026, that bet was harder than usual to get right — steel and cement both moved more than their five-year average volatility would suggest.",
      "## Steel: a slow climb, not a spike",
      "Steel reinforcement pricing rose gradually rather than sharply across the region, driven more by import logistics costs than by raw material shortages. Projects that locked in supplier quotes early in the year fared meaningfully better than those pricing steel-heavy phases later.",
      "## Cement: regional, not uniform",
      "Cement pricing diverged more by region than by supplier this half — coastal markets stayed comparatively stable while inland markets saw larger swings tied to transport fuel costs. This is a case where a single national average estimate would have misled a project sitting even a few hundred kilometers from a coastal source.",
      "> A material estimate is only as good as the region it's actually priced against.",
      "## Timber held steadier than the other two",
      "Timber pricing was comparatively flat, with the main variability coming from grade availability rather than base price — projects specifying a common grade saw little movement, while those requiring less common treated timber saw longer lead times more than higher prices.",
      "## What this means going into H2",
      "If your quantity survey is more than six to eight weeks old and steel or inland cement make up a meaningful share of your budget, it's worth re-pricing those lines before finalizing supplier orders. VECAI's Quantity Survey pulls updated regional rates weekly for exactly this reason.",
    ],
  },
];
