import { defineConfig } from "vite";
import { globSync } from "glob";
import { resolve } from "path";
import path from "path";
import handlebars from "vite-plugin-handlebars";
import FullReload from "vite-plugin-full-reload";
import postcssCombineMediaQuery from "postcss-combine-media-query";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import autoprefixer from "autoprefixer";
import { hulakPlugins } from "vite-plugin-hulak-tools";
import {
  slidesProductionAbout,
  slidesProductionMain,
} from "./src/js/partials/arrays-for-swipers.js";

export default defineConfig(({ mode }) => {
  const isDeploy = mode === "deploy";
  const basePath = isDeploy ? "/nuts/" : "/";

  return {
    base: basePath,
    build: {
      sourcemap: true,
      minify: "terser",
      outDir: "dist",
      rollupOptions: {
        input: Object.fromEntries(
          globSync("./*.html").map((file) => [
            file.replace("./", "").replace(".html", ""),
            resolve(__dirname, file),
          ]),
        ),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssCombineMediaQuery(),
          postcssSortMediaQueries(),
          autoprefixer(),
        ],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      handlebars({
        reloadOnPartialChange: true,
        partialDirectory: [path.resolve(__dirname, "src/html/")],
        helpers: {
          array(...args) {
            return args.slice(0, -1);
          },
          dict(...args) {
            const obj = {};
            for (let i = 0; i < args.length - 1; i += 2) {
              obj[args[i]] = args[i + 1];
            }
            return obj;
          },
          dataAttrs(attrs) {
            return Object.entries(attrs || {})
              .map(([key, value]) => `data-${key}="${value}"`)
              .join(" ");
          },
        },
        context: {
          slidesProductionMain,
          slidesProductionAbout,
        },
      }),
      hulakPlugins({
        enableHandlebars: true,
        handlebarsOptions: {
          partialDirectory: "src/html/",
        },
      }),
      FullReload(["src/html/**/*.html", "*.html"]),
    ],
  };
});
