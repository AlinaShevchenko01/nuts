import { defineConfig } from 'vite'
import path from 'path'
import handlebars from "vite-plugin-handlebars";
import FullReload from 'vite-plugin-full-reload';
import postcssCombineMediaQuery from 'postcss-combine-media-query'
import postcssSortMediaQueries from 'postcss-sort-media-queries'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) =>{
    const isDeploy = mode === 'deploy'
    const basePath = isDeploy? '/Nuts/' : '/'

    return {
        base: basePath,
        build: {
            sourcemap: true,
            minify: 'terser',
            outDir: 'dist',
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            }
        },
        css: {
            postcss:{
                plugins: [postcssCombineMediaQuery(),
                    postcssSortMediaQueries(),
                    autoprefixer()]
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),

            }
        },
        plugins: [
            handlebars({
                reloadOnPartialChange: true,
                partialDirectory: [
                    path.resolve(__dirname, 'src/html/partials'),
                    path.resolve(__dirname, 'src/html/templates'),
                    path.resolve(__dirname, 'src/html/pages/main'),
                ],
                helpers: {
                    array(...args) {
                        return args.slice(0,-1)
                    },
                    dict(...args) {
                        const obj = {};
                        for (let i = 0; i < args.length - 1; i += 2){
                            obj[args[i]] = args[i + 1];
                        }
                        return obj;
                    },
                    dataAttrs(attrs) {
                        return Object.entries((attrs || {}))
                          .map((([key, value]) => `data-${key}="${value}"`))
                          .join(' ')
                    }
                }
            }),
            FullReload([
                'src/html/**/*.html',
                '*.html'
            ])
        ]
    }
})