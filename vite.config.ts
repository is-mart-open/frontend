import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      babel: {
        plugins: ["@compiled/babel-plugin"]
      }
    }),
    VitePWA({
      manifest: {
        name: "오늘 마트 영업하나요?",
        short_name: "오늘 마트 영업하나요?",
        description: "방문할 마트의 영업 유무를 알려드려요.",
        theme_color: "#ffffff",
        icons: [
          {
            "src": "icons/favicon.svg",
            "sizes": "any",
          }
        ]
      }
    })
  ]
})
