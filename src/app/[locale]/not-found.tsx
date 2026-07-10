import { ArrowLeftIcon, FileQuestionIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6">
      <div className="text-primary mb-5 flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
        <FileQuestionIcon
          className="size-5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md text-lg leading-relaxed">
        {t("description")}
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors md:text-base"
      >
        <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden="true" />
        {t("backHome")}
      </Link>
    </div>
  );
}
