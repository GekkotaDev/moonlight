// oxlint-disable no-unused-vars
// @ts-ignore
import { topic, section, page, sidebar, autogenerate } from "./utils/dsl/sidebar";

export default sidebar(
  {
    exclude: ["/blog/.obsidian", "/blog/.obsidian/**/*"],
    topics: {
      blog: ["/blog", "/blog/**/*"],
    },
  },
  topic(
    {
      label: "Tutorial",
      link: "/tutorials/",
      icon: "rocket",
    },
    page`tutorials`,
  ),
  topic(
    {
      label: "Guides",
      link: "/guides/",
      icon: "open-book",
    },
    page`guides`,
  ),
  topic(
    {
      label: "Reference",
      link: "/reference/",
      icon: "document",
    },
    page`reference`,
  ),
  topic({
    label: "Blog",
    link: "/blog/",
    icon: "pen",
    id: "blog",
  }),
  topic(
    {
      label: "FAQ",
      link: "/faq/",
      icon: "question",
    },
    autogenerate.from`faq`,
  ),
  topic(
    {
      label: "Index",
      link: "/index-list/",
      icon: "list-format",
    },
    page`index-list`,
  ),
);
