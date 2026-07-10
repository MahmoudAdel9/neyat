import type { Intention, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { EvidenceBlock } from "@/components/intentions/evidence-block";
import { cn } from "@/lib/utils";

type IntentionItemProps = {
  intention: Intention;
  locale: LocaleCode;
  level?: number;
};

export function IntentionItem({
  intention,
  locale,
  level = 0,
}: IntentionItemProps) {
  const hasChildren = Boolean(intention.children?.length);
  const hasEvidences = intention.evidences.length > 0;
  const title = localize(intention.title, locale);
  const titleClass =
    level === 0
      ? "font-heading text-lg leading-relaxed font-medium md:text-xl"
      : "text-base leading-relaxed font-medium md:text-lg";

  if (!hasChildren && !hasEvidences) {
    return (
      <article className="border-border/50 border-b py-5 last:border-b-0">
        <h3 className={titleClass}>{title}</h3>
      </article>
    );
  }

  return (
    <details
      className="border-border/50 group border-b last:border-b-0 open:pb-2"
      open={level === 0}
    >
      <summary
        className={cn(
          "hover:text-primary cursor-pointer list-none py-5 marker:content-none",
          "flex items-start justify-between gap-3 outline-none",
          "focus-visible:ring-ring focus-visible:rounded-md focus-visible:ring-2",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        <h3 className={cn(titleClass, "min-w-0 flex-1")}>{title}</h3>
        <span
          aria-hidden="true"
          className="text-muted-foreground mt-1 shrink-0 text-lg leading-none transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="pb-5">
        {hasEvidences ? (
          <div className="space-y-1">
            {intention.evidences.map((evidence, index) => (
              <EvidenceBlock
                key={`${intention.id}-${evidence.kind}-${index}`}
                evidence={evidence}
                locale={locale}
              />
            ))}
          </div>
        ) : null}

        {hasChildren ? (
          <div className="border-border/40 ms-2 mt-2 space-y-0 border-s ps-4">
            {intention.children!.map((child) => (
              <IntentionItem
                key={child.id}
                intention={child}
                locale={locale}
                level={level + 1}
              />
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}

type IntentionListProps = {
  intentions: Intention[];
  locale: LocaleCode;
};

export function IntentionList({ intentions, locale }: IntentionListProps) {
  return (
    <div className="w-full">
      {intentions.map((intention) => (
        <IntentionItem
          key={intention.id}
          intention={intention}
          locale={locale}
        />
      ))}
    </div>
  );
}
