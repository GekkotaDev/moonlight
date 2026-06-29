import { obsidianSidebarEntries } from "starlight-obsidian";

import { topic, autogenerate, section, page, sidebar } from "../../../src/utils/dsl/sidebar";

export default sidebar(
  {
    topics: {
      blog: ["/blog", "/blog/**/*"],
    },
  },
  topic(
    {
      label: "Guide",
      link: "/guides/",
      icon: "open-book",
    },
    page`guides/code-of-conduct`,
    section`Architecture`(
      page`guides/architecture/overview`,
      page`guides/architecture/code-map`,
      page`guides/architecture/cross-cutting-concerns`,
      page`guides/architecture/roadmap`,
      page`guides/architecture/glossary`,
    ),
    section`Stack`(page`guides/stack/overview`),
  ),
  topic(
    {
      label: "Reference",
      link: "/reference/",
      icon: "information",
    },
    autogenerate.from`reference`,
  ),
  topic({
    label: "Dev Logs",
    link: "/blog/",
    icon: "pen",
    id: "blog",
  }),
  topic(
    {
      label: "Vault",
      link: "/vault/",
      icon: "notes",
    },
    obsidianSidebarEntries,
  ),
);
