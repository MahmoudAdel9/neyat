import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md text-base leading-relaxed">
        {t("description")}
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
