import { getLocale, getTranslations } from "next-intl/server";

type QuoteProps = {
  attribution: string;
  text: string;
  locale: string;
  className?: string;
};

function Quote({ attribution, text, locale, className }: QuoteProps) {
  return (
    <figure
      className={`border-primary/30 bg-card/30 rounded-e-md border-s-2 px-5 py-6 sm:px-6 ${className ?? ""}`}
    >
      <figcaption className="text-primary mb-3 text-sm font-medium tracking-wide">
        {attribution}
      </figcaption>
      <blockquote
        lang={locale}
        className={
          locale === "ar"
            ? "text-foreground font-sans text-base leading-loose md:text-lg"
            : "font-quote text-foreground text-base leading-relaxed italic md:text-lg"
        }
      >
        <p>{text}</p>
      </blockquote>
    </figure>
  );
}

export async function FeaturedQuote() {
  const t = await getTranslations("Home");
  const locale = await getLocale();

  return (
    <div className="animate-rise space-y-4">
      <Quote
        locale={locale}
        attribution={t("featuredQuoteAttribution")}
        text={t("featuredQuote")}
      />
      <Quote
        locale={locale}
        attribution={t("secondQuoteAttribution")}
        text={t("secondQuote")}
      />
    </div>
  );
}
