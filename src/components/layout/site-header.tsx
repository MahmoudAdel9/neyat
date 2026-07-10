"use client";

import { MenuIcon } from "lucide-react";
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
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/intentions/sleep", key: "sleep" as const },
  { href: "/intentions/work", key: "work" as const },
  { href: "/intentions/gym", key: "gym" as const },
];

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("flex gap-1", className)}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
            )}
            aria-current={isActive ? "page" : undefined}
          >
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
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
