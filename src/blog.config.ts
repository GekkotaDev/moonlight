// oxlint-disable no-unused-vars
// @ts-ignore
import { config } from "./utils/dsl/blog";

export default config({
  title: {
    en: "Dev Logs",
  },

  authors: {
    ghost: {
      name: "John Doe",
      picture: "https://avatars.githubusercontent.com/u/10137",
      url: "https://github.com/ghost",
    },
  },

  // rss: true,
  metrics: {
    readingTime: true,
    words: "total",
  },
});
