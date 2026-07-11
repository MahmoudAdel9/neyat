import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CategoryView } from "@/components/intentions/category-view";
import {
  CATEGORY_IDS,
  getCategory,
  isCategoryId,
  type LocaleCode,
} from "@/content/intentions";
import { routing } from "@/i18n/routing";
import { buildCategoryJsonLd, buildCategoryMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; category: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CATEGORY_IDS.map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, category } = await params;

  if (!hasLocale(routing.locales, locale) || !isCategoryId(category)) {
    return {};
  }

  return buildCategoryMetadata({
    locale,
    categoryId: category,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { locale, category: categoryParam } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  if (!isCategoryId(categoryParam)) {
    notFound();
  }

  const typedLocale = locale as LocaleCode;
  const category = getCategory(categoryParam);
  const jsonLd = buildCategoryJsonLd(typedLocale, categoryParam);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <CategoryView category={category} locale={typedLocale} />
      </div>
    </>
  );
}
