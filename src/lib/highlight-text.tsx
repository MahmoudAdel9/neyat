import type { ReactNode } from "react";

export function highlightText(text: string, phrases: string[]): ReactNode {
  const matches = phrases.filter((phrase) => phrase && text.includes(phrase));
  if (matches.length === 0) {
    return text;
  }

  const pattern = matches
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a, b) => b.length - a.length)
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "g"));

  return parts.map((part, index) =>
    matches.includes(part) ? (
      <mark
        key={`${part}-${index}`}
        className="bg-accent/25 text-foreground rounded-sm px-0.5 not-italic"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}
