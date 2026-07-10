import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("Nav");

  return (
    <a
      href="#main-content"
      className="bg-primary text-primary-foreground focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:outline-none ltr:focus:left-4 rtl:focus:right-4"
    >
      {t("skipToContent")}
    </a>
  );
}
