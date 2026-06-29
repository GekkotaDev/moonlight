import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
// import { pluginCodeCaption } from "@fujocoded/expressive-code-caption";
import { pluginMagicMove } from "ec-magic-move";
import { pluginTypewriter } from "expressive-code-typewriter";

import { expressiveCodeD2Plugin } from "./plugins/ec/d2";

export default {
  themes: ["gruvbox-dark-soft", "gruvbox-light-hard"],
  plugins: [
    // pluginCodeCaption(),
    pluginTypewriter(),
    pluginLineNumbers(),
    pluginMagicMove(),
    pluginCollapsibleSections(),
    expressiveCodeD2Plugin(),
  ],
  shiki: {
    langs: ["d2"],
  },
  defaultProps: {
    // Change the default style of collapsible sections
    collapseStyle: "collapsible-auto",

    // Show line numbers by default
    showLineNumbers: true,
  },
};
