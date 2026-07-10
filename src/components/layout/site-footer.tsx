import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-border/60 mt-auto border-t">
      <div className="text-muted-foreground mx-auto flex max-w-3xl flex-col gap-1 px-4 py-8 text-sm sm:px-6">
        <p>{t("builtFor")}</p>
        <p>{t("rights")}</p>
      </div>
    </footer>
  );
}
