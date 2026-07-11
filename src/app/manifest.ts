import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نيات | Nwaya",
    short_name: "Nwaya",
    description:
      "Islamic intentions for sleep, work, and training — نيات شرعية للنوم والعمل والرياضة",
    start_url: "/ar",
    display: "standalone",
    background_color: "#1a2230",
    theme_color: "#1a2230",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
