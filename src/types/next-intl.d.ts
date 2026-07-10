declare module "next-intl" {
  interface AppConfig {
    Locale: "ar" | "en";
    Messages: typeof import("../../messages/en.json");
  }
}

export {};
