import type { StarlightIcon } from "@astrojs/starlight/types";

type Social = {
  icon: StarlightIcon;
  label: string;
  href: string;
};

const createLinkFactory =
  (icon: StarlightIcon, label: string) =>
  (href: TemplateStringsArray): Social => ({
    icon,
    label,
    href: href[0]!,
  });

export const links = {
  bluesky: createLinkFactory("blueSky", "Bluesky"),
  discord: createLinkFactory("discord", "Discord"),
  email: createLinkFactory("email", "E-mail"),
  linkedin: createLinkFactory("linkedin", "LinkedIn"),
  reddit: createLinkFactory("reddit", "Reddit"),
  rss: createLinkFactory("rss", "RSS"),
  patreon: createLinkFactory("patreon", "Patreon"),
  openCollective: createLinkFactory("openCollective", "Open Collective"),
  facebook: createLinkFactory("facebook", "Facebook"),
  git: createLinkFactory("seti:git", "Git"),
  instagram: createLinkFactory("instagram", "Instagram"),
  mastodon: createLinkFactory("mastodon", "Mastodon"),
  matrix: createLinkFactory("matrix", "Matrix"),
  signal: createLinkFactory("signal", "Signal"),
  slack: createLinkFactory("slack", "Slack"),
  teams: createLinkFactory("microsoftTeams", "Teams"),
  threads: createLinkFactory("threads", "Threads"),
  website: createLinkFactory("external", "Website"),
};

export const contacts = (...socials: Social[]): Social[] => socials;
