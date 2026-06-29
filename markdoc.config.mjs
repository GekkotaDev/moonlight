import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],

  tags: {
    aside: {
      render: component("@astrojs/starlight/components", "Aside"),
      attributes: {
        type: { type: String, required: true, matches: ["note", "tip", "caution", "danger"] },
        title: { type: String, required: false },
      },
    },
    card: {
      render: component("@astrojs/starlight/components", "Card"),
      attributes: {
        title: { type: String, required: true },
        icon: { type: String, required: false },
      },
    },
    linkcard: {
      render: component("@astrojs/starlight/components", "LinkCard"),
      attributes: {
        title: { type: String, required: true },
        href: { type: String, required: true },
        description: { type: String, required: false },
      },
    },
    cardgrid: {
      render: component("@astrojs/starlight/components", "CardGrid"),
      attributes: {
        stagger: { type: Boolean, required: false, default: false },
      },
    },
    filetree: {
      render: component("@astrojs/starlight/components", "FileTree"),
    },
    icon: {
      render: component("@astrojs/starlight/components", "Icon"),
      attributes: {
        name: { type: String, required: true },
        label: { type: String, required: false },
        size: { type: String, required: false },
        color: { type: String, required: false },
        class: { type: String, required: false },
      },
    },
    linkbutton: {
      render: component("@astrojs/starlight/components", "LinkButton"),
      attributes: {
        href: { type: String, required: true },
        variant: {
          type: String,
          required: false,
          matches: ["primary", "secondary", "minimal"],
          default: "primary",
        },
        icon: { type: String, required: false },
        iconPlacement: {
          type: String,
          required: false,
          matches: ["start", "end"],
          default: "end",
        },
      },
    },
    steps: {
      render: component("@astrojs/starlight/components", "Steps"),
    },
    tabs: {
      render: component("@astrojs/starlight/components", "Tabs"),
      attributes: {
        syncKey: { type: String, required: false },
      },
    },
    tabitem: {
      render: component("@astrojs/starlight/components", "TabItem"),
      attributes: {
        label: { type: String, required: false },
        icon: { type: String, required: false },
      },
    },
    kbd: {
      render: component("starlight-kbd/components", "Kbd"),
      attributes: {
        mac: { type: String, required: false },
        windows: { type: String, required: false },
      },
    },
    list: {
      render: component("starlight-videos/components", "List"),
      attributes: {
        title: { type: String, required: true },
        variant: {
          type: String,
          required: false,
          matches: ["note", "tip", "caution", "danger", "success", "minimal"],
          default: "minimal",
        },
        icon: { type: String, required: false },
      },
    },
    quiz: {
      render: component("starlight-videos/components", "Quiz"),
      attributes: {
        title: { type: String, required: true },
        variant: {
          type: String,
          required: false,
          matches: ["note", "tip", "caution", "danger", "success", "minimal"],
          default: "minimal",
        },
        multiple: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
    },
    quizoption: {
      render: component("starlight-videos/components", "QuizOption"),
      attributes: {
        correct: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
    },
    videoplayer: {
      render: component("starlight-videos/components", "VideoPlayer"),
      attributes: {
        link: {
          type: String,
          required: true,
        },
      },
    },
  },
});
