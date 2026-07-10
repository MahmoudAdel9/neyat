import { gymCategory } from "./gym";
import { sleepCategory } from "./sleep";
import type { CategoryId, IntentionCategory, LocaleCode } from "./types";
import { workCategory } from "./work";

const categories: Record<CategoryId, IntentionCategory> = {
  sleep: sleepCategory,
  work: workCategory,
  gym: gymCategory,
};

export const CATEGORY_IDS = Object.keys(categories) as CategoryId[];

export function getAllCategories(): IntentionCategory[] {
  return CATEGORY_IDS.map((id) => categories[id]);
}

export function getCategory(id: CategoryId): IntentionCategory {
  return categories[id];
}

export function isCategoryId(value: string): value is CategoryId {
  return value in categories;
}

export function localize<T extends Record<LocaleCode, string>>(
  value: T,
  locale: LocaleCode,
): string {
  return value[locale] ?? value.ar;
}

export type { CategoryId, IntentionCategory, LocaleCode };
export type { Evidence, EvidenceKind, Intention, LocaleString } from "./types";
