"use client";

import { HomeIcon, MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { categoryIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" as const, icon: HomeIcon },
  { href: "/intentions/sleep", key: "sleep" as const, icon: categoryIcons.sleep },
  { href: "/intentions/work", key: "work" as const, icon: categoryIcons.work },
  { href: "/intentions/gym", key: "gym" as const, icon: categoryIcons.gym },
];

function NavLinks({
  onNavigate,
  className,
  showIcons = false,
}: {
  onNavigate?: () => void;
  className?: string;
  showIcons?: boolean;
}) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("flex gap-1", className)}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-3 py-2 text-base transition-colors",
              isActive
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {showIcons ? (
              <Icon
                className="size-3.5 shrink-0 opacity-80"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            ) : null}
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const tHome = useTranslations("Home");
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/60 bg-background/70 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-foreground text-xl font-semibold tracking-tight"
        >
          {tHome("brand")}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLinks className="items-center" />
          <LocaleSwitcher />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label={t("openMenu")}
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{tHome("brand")}</SheetTitle>
              </SheetHeader>
              <NavLinks
                className="mt-4 flex-col items-stretch px-2"
                onNavigate={() => setOpen(false)}
                showIcons
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
