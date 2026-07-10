import { getTranslations } from "next-intl/server";
import type { Evidence, EvidenceKind, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { cn } from "@/lib/utils";

const kindBorder: Record<EvidenceKind, string> = {
  quran: "border-quran/50",
  hadith: "border-hadith/50",
  athar: "border-border",
  scholar: "border-border",
};

type EvidenceBlockProps = {
  evidence: Evidence;
  locale: LocaleCode;
};

export async function EvidenceBlock({ evidence, locale }: EvidenceBlockProps) {
  const t = await getTranslations("Category");
  const label = t(`evidenceLabel.${evidence.kind}`);

  return (
    <figure
      className={cn(
        "bg-card/40 border-inline-start my-3 rounded-e-md border-s-2 px-4 py-3",
        kindBorder[evidence.kind],
      )}
    >
      <figcaption className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
        {label}
      </figcaption>
      <blockquote
        lang={locale === "ar" ? "ar" : "en"}
        className={
          locale === "ar"
            ? "text-foreground font-sans text-base leading-loose md:text-lg"
            : "font-quote text-foreground text-base leading-relaxed italic md:text-lg"
        }
      >
        <p>«{localize(evidence.text, locale)}»</p>
      </blockquote>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {localize(evidence.source, locale)}
      </p>
    </figure>
  );
}
