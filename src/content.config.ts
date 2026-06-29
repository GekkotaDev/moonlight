import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

// import { changelogsLoader } from "starlight-changelogs/loader";
import { blogSchema } from "starlight-blog/schema";
import { topicSchema } from "starlight-sidebar-topics/schema";
import { pageSiteGraphSchema } from "starlight-site-graph/schema";
import { videosSchema } from "starlight-videos/schemas";

export const collections = {
  // changelogs: defineCollection({
  //   loader: changelogsLoader([
  //     {
  //       base: "changelog",
  //       owner: "",
  //       repo: "",
  //       provider: "gitea",
  //     },
  //   ]),
  // }),

  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) =>
        blogSchema(context)
          .extend(pageSiteGraphSchema.shape)
          .extend(topicSchema.shape)
          .extend(videosSchema.shape),
    }),
  }),
};
