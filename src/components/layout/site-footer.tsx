import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { categoryIcons } from "@/lib/icons";

const footerLinks = [
  { href: "/intentions/sleep", key: "sleep" as const },
  { href: "/intentions/work", key: "work" as const },
  { href: "/intentions/gym", key: "gym" as const },
];

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const tHome = await getTranslations("Home");
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-auto border-t">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-foreground hover:text-primary text-xl font-semibold tracking-tight transition-colors"
            >
              {tHome("brand")}
            </Link>
            <p className="text-muted-foreground mt-3 text-base leading-relaxed">
              {t("builtFor")}
            </p>
          </div>

          <nav
            aria-label={t("navLabel")}
            className="flex flex-col gap-2 sm:items-end"
          >
            <p className="text-primary mb-1 text-xs tracking-[0.2em] uppercase">
              {t("explore")}
            </p>
            <ul
              className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end"
              role="list"
            >
              {footerLinks.map((item) => {
                const Icon = categoryIcons[item.key];

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-base transition-colors"
                    >
                      <Icon
                        className="size-3.5 shrink-0 opacity-70"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {tNav(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="border-border/40 flex flex-col gap-2 border-t pt-6 text-base">
          <p className="text-muted-foreground leading-relaxed">{t("rights")}</p>
          <p className="text-muted-foreground">{t("copyright", { year })}</p>
        </div>
      </div>
    </footer>
  );
}
