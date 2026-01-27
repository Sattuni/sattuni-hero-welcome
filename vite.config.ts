import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";
import { htmlPrerender } from "vite-plugin-html-prerender";

// Routes to pre-render for SEO and bot accessibility (ChatGPT, Google, etc.)
const prerenderRoutes = [
  // Landing
  '/',
  // Catering
  '/catering',
  '/catering/galerie',
  '/catering/menus',
  '/catering/ueber-uns',
  // Blog (Priority for ChatGPT/Perplexity)
  '/catering/blog',
  '/catering/blog/buero-lunch-ideen',
  '/catering/blog/was-bedeutet-mezze',
  '/catering/blog/workshop-catering',
  '/catering/blog/vegane-arabische-klassiker',
  '/catering/blog/veganes-office-buffet-veganuary',
  '/catering/blog/kundenbesuch-catering-abwechslung',
  // Restaurant
  '/restaurant',
  '/restaurant/spezialitaeten',
  '/restaurant/speisekarte',
  // Legal
  '/impressum',
  '/datenschutz',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Pre-render pages for SEO - only in production builds
    mode === "production" && htmlPrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: prerenderRoutes,
      // Wait for SEO meta tags to be set before capturing HTML
      selector: 'meta[name="prerender-ready"]',
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
}));
