import { ArrowLeftIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { IntentionCategory, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { IntentionList } from "@/components/intentions/intention-list";
import { Link } from "@/i18n/navigation";

type CategoryViewProps = {
  category: IntentionCategory;
  locale: LocaleCode;
};

export async function CategoryView({ category, locale }: CategoryViewProps) {
  const t = await getTranslations("Category");

  return (
    <article>
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-base transition-colors"
      >
        <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden="true" />
        {t("backHome")}
      </Link>

      <header className="mb-10">
        <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {localize(category.title, locale)}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed md:text-xl">
          {localize(category.description, locale)}
        </p>
      </header>

      <section aria-labelledby="intentions-heading">
        <h2 id="intentions-heading" className="sr-only">
          {t("intentionsHeading")}
        </h2>
        <IntentionList intentions={category.intentions} locale={locale} />
      </section>
    </article>
  );
}
