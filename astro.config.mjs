// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import { unified } from "@astrojs/markdown-remark";
import markdoc from "@astrojs/markdoc";
import { satteri } from "@astrojs/markdown-satteri";
import solidJs from "@astrojs/solid-js";
import AstroPWA from "@vite-pwa/astro";
import tailwindcss from "@tailwindcss/vite";

import astroD2 from "astro-d2";
import embeds from "astro-embed/integration";

import starlightAutoDrafts from "starlight-auto-drafts";
import starlightBlog from "starlight-blog";
// import starlightChangelogs from "starlight-changelogs";
import starlightHeadingBadges from "starlight-heading-badges";
// import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";
import starlightKbd from "starlight-kbd";
import starlightLinksValidator from "starlight-links-validator";
// import starlightObsidian from "starlight-obsidian";
import starlightScrollToTop from "starlight-scroll-to-top";
import starlightSidebarSwipe from "starlight-sidebar-swipe";
import starlightSiteGraph from "starlight-site-graph";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightVideos from "starlight-videos";

import blogConfig from "./src/blog.config.ts";
import social from "./src/links.config.ts";
import starlightSidebarTopics from "./src/sidebar.config.ts";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentIntellisense: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: satteri(),
  },

  integrations: [
    solidJs(),
    embeds(),
    astroD2({
      // layout: "tala",
      experimental: { useD2js: true },
    }),
    starlight({
      title: "<app> Manual",
      description: "Internal use documentation.",
      editLink: {
        baseUrl: "https://example.com",
      },

      social,

      plugins: [
        // starlightObsidian({
        //   vault: "./vault",
        // }),

        starlightAutoDrafts(),
        starlightSidebarTopics,

        // starlightGiscus({
        //   repo: "owner/repo-name",
        //   repoId: "giscus-repository-ids",
        //   category: "github-discussions-category-name",
        //   categoryId: "giscus-category-id",
        // }),

        starlightThemeRapide(),
        starlightKbd({
          types: [
            { id: "mac", label: "macOS" },
            { id: "windows", label: "Windows", default: true },
          ],
        }),
        starlightBlog(blogConfig),

        starlightVideos(),
        starlightImageZoom(),
        starlightHeadingBadges(),
        starlightSiteGraph(),
        starlightScrollToTop(),
        starlightSidebarSwipe(),
        starlightLinksValidator(),
        // starlightChangelogs(),
      ],

      components: {
        // Override the default `Sidebar` component with a custom one.
        MarkdownContent: "./src/components/MarkdownContent.astro",
        Sidebar: "./src/components/Sidebar.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: [
        "./src/styles/global.css",
        "./src/styles/custom.css",

        "@fontsource-variable/inter",
        "@fontsource-variable/fira-code",
        "@fontsource-variable/atkinson-hyperlegible-next",
      ],
    }),
    markdoc(),
    AstroPWA(),
  ],
});
