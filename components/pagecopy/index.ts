import type { Lang } from "../i18n";
import type { PageCopy } from "./types";
import en from "./en";
import am from "./am";
import om from "./om";
import no from "./no";

export type { PageCopy, Pair, DocCard, Phase, Fact } from "./types";

/* ═══════════════════════════════════════════════════════════════════════
   ⚠️  PENDING COMPANY SIGN OFF
   The operating figures carried in each language's `facts` array come from
   the approved content guide and are published with "approximately".
   The guide requires final company confirmation of the 120 head per cycle,
   the 1.2 hectare site and the contact details before the site goes live.
   See README.md → "Placeholder content to replace".
   ═══════════════════════════════════════════════════════════════════ */

export const P: Record<Lang, PageCopy> = { en, am, om, no };
